const sharedConfig = {
	client: "sqlite3",
	useNullAsDefault: true,

	migrations: {
		directory: "./knex/migrations",
	},

	seeds: {
		directory: "./knex/seeds",
	},

	pool: {
		afterCreate: (conn, done) => {
			conn.run("PRAGMA foreign_keys = ON", done);
		},
	},
};

module.exports = {
	development: {
		...sharedConfig,
		connection: {
			filename: "./knex/recipes.db3",
		},
	},
};
