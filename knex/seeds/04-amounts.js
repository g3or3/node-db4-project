const amounts = [
	{ quantity: "1", step_id: "1", ingredient_id: "1" },
	{ quantity: "1", step_id: "2", ingredient_id: "2" },
	{ quantity: "2", step_id: "3", ingredient_id: "3" },
	{ quantity: "2", step_id: "4", ingredient_id: "4" },
	{ quantity: "1", step_id: "5", ingredient_id: "5" },
	{ quantity: "1", step_id: "6", ingredient_id: "9" },
	{ quantity: "2", step_id: "7", ingredient_id: "6" },
	{ quantity: "2", step_id: "8", ingredient_id: "1" },
	{ quantity: "1", step_id: "9", ingredient_id: "8" },
	{ quantity: "1", step_id: "10", ingredient_id: "10" },
];

exports.seed = function (knex) {
	return knex("amounts").insert(amounts);
};
