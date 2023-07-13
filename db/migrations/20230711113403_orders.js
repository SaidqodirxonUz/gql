/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("orders", (table) => {
    table.increments("id");
    table
      .integer("client_id")
      .references("id")
      .inTable("clients")
      .onDelete("CASCADE")
      .notNullable();
    table.double("total_price").notNullable();
    table.boolean("is_paid").defaultTo(false).notNullable();
    table.enum("status", [("preparing", "prepared", "completed")]).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("orders");
};
