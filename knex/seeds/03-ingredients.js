const ingredients = [
	{ ingredient_name: "cheese" },
	{ ingredient_name: "flour" },
	{ ingredient_name: "beef" },
	{ ingredient_name: "pasta" },
	{ ingredient_name: "chicken" },
	{ ingredient_name: "broccoli" },
	{ ingredient_name: "salmon" },
	{ ingredient_name: "tuna" },
	{ ingredient_name: "rice" },
	{ ingredient_name: "seaweed" },
	{ ingredient_name: "soy sauce" },
];

exports.seed = function (knex) {
	return knex("ingredients").insert(ingredients);
};
