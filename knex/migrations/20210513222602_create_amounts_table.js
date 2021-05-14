exports.up = async function (knex) {
	await knex.schema.createTable("amounts", (tbl) => {
		tbl.increments("amount_id");
		tbl.integer("quantity").unsigned().notNullable();
		tbl
			.integer("step_id")
			.unsigned()
			.notNullable()
			.references("step_id")
			.inTable("steps")
			.onDelete("RESTRICT");
		tbl
			.integer("ingredient_id")
			.unsigned()
			.notNullable()
			.references("ingredient_id")
			.inTable("ingredients")
			.onDelete("RESTRICT");
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists("amounts");
};
