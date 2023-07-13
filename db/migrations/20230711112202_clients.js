/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("clients", (table) => {
    table.increments("id");
    table.integer("phone_number").notNullable();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("password", 350).notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("clients");
};
