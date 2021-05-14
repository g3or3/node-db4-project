const steps = [
	{ step_number: "1", instructions: "make pizza", recipe_id: "1" },
	{ step_number: "2", instructions: "enjoy pizza", recipe_id: "1" },
	{ step_number: "1", instructions: "make lasagna", recipe_id: "2" },
	{ step_number: "2", instructions: "enjoy lasagna", recipe_id: "2" },
	{ step_number: "1", instructions: "make fried chicken", recipe_id: "3" },
	{ step_number: "2", instructions: "enjoy fried chicken", recipe_id: "3" },
	{ step_number: "1", instructions: "make broccoli soup", recipe_id: "4" },
	{ step_number: "2", instructions: "enjoy broccoli soup", recipe_id: "4" },
	{ step_number: "1", instructions: "make sushi", recipe_id: "5" },
	{ step_number: "2", instructions: "enjoy sushi", recipe_id: "5" },
];

exports.seed = function (knex) {
	return knex("steps").insert(steps);
};
