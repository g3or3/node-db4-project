const recipes = [
	{ recipe_name: "pizza" },
	{ recipe_name: "lasagna" },
	{ recipe_name: "fried chicken" },
	{ recipe_name: "broccoli soup" },
	{ recipe_name: "sushi" },
];

exports.seed = function (knex) {
	return knex("recipes").insert(recipes);
};
