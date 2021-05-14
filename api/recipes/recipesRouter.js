const router = require("express").Router();
const Recipes = require("./recipesModel");

router.get("/", async (req, res) => {
	res.json(await Recipes.getAllRecipes());
});

router.get("/:id", async (req, res) => {
	res.json(await Recipes.getRecipeById(req.params.id));
});

router.post("/", async (req, res) => {
	const { recipe_name, ingredients, instructions } = req.body;
	res.json(await Recipes.createRecipe(recipe_name));
	res.json(await Recipes.createRecipe(ingredients));
	res.json(await Recipes.createRecipe(instructions));
});

module.exports = router;
