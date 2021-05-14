const db = require("../../knex");

const getAllRecipes = () => {
	return db("recipes");
};

const getIngredients = async (recipe_id, step_number) => {
	let results;

	const queryParams = step_number
		? { "r.recipe_id": parseInt(recipe_id), "s.step_number": parseInt(step_number) }
		: { "r.recipe_id": parseInt(recipe_id) };

	results = await db
		.select("i.ingredient_id", "ingredient_name", "quantity")
		.from("amounts as a")
		.join("steps as s", "s.step_id", "a.step_id")
		.join("recipes as r", "r.recipe_id", "s.recipe_id")
		.join("ingredients as i", "i.ingredient_id", "a.ingredient_id")
		.where(queryParams);

	return results;
};

const getStepsByRecipeId = async (recipe_id) => {
	let results = await db
		.select("step_id", "step_number", "instructions")
		.from("steps as s")
		.join("recipes as r", "r.recipe_id", "s.recipe_id")
		.where("r.recipe_id", parseInt(recipe_id));

	results = results.reduce(async (acc, step) => {
		const { step_id, step_number, instructions } = step;
		if (!(await acc).steps) {
			(await acc).steps = [
				{
					step_id,
					step_number,
					instructions,
					ingredients: await getIngredients(recipe_id, step_number),
				},
			];
		} else {
			(await acc).steps.push({
				...step,
				ingredients: await getIngredients(recipe_id, step_number),
			});
		}

		return acc;
	}, {});

	return results;
};

const getRecipeById = async (recipe_id) => {
	const [recipe] = await db
		.select("recipe_id", "recipe_name", "created_at")
		.from("recipes")
		.where({ recipe_id });

	if (!recipe) return null;

	const results = await getStepsByRecipeId(recipe_id);

	const { steps } = results;

	if (steps?.length) {
		return { ...recipe, steps };
	} else {
		return { ...recipe, steps: [] };
	}
};

const createRecipe = async (recipe) => {
	const [id] = await db("recipes").insert(recipe);
	return db("recipes").where({ recipe_id: id });
};

module.exports = {
	getAllRecipes,
	getIngredients,
	getStepsByRecipeId,
	getRecipeById,
	createRecipe,
};
