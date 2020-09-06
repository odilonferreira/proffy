import Knex from "knex";

export async function up(knex: Knex) {
  // alterações no banco de dados
  return knex.schema.createTable("classes", (table) => {
    table.increments("id").primary();
    table.string("subject").notNullable();
    table.decimal("cost").notNullable();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  // quando der errado, o que fazer
  knex.schema.dropTable("classes");
}
