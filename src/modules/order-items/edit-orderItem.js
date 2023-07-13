import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const editOrderItem = async ({ id, ...payload }) => {
  const result = await db("order_items").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Order Item not found");
  }

  return (await db("order_items").where({ id }).update(payload).returning("*"))[0];
};
