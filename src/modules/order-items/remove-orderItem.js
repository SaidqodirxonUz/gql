import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const removeOrderItem = async ({ id }) => {
  const result = await db("order_items").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Order Item not found");
  }

  return (await db("order_items").where({ id }).delete().returning("*"))[0];
};
