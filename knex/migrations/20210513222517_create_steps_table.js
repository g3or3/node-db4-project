exports.up = async function (knex) {
	await knex.schema.createTable("steps", (tbl) => {
		tbl.increments("step_id");
		tbl.integer("step_number").unsigned().notNullable();
		tbl.text("instructions").notNullable();
		tbl
			.integer("recipe_id")
			.unsigned()
			.notNullable()
			.references("recipe_id")
			.inTable("recipes")
			.onDelete("RESTRICT");
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists("steps");
};
