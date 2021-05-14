exports.up = async function (knex) {
	await knex.schema.createTable("recipes", (tbl) => {
		tbl.increments("recipe_id");
		tbl.string("recipe_name").notNullable().unique();
		tbl.timestamps(true, true);
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists("recipes");
};
