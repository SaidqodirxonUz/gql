import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const showOrderItem = async ({ id }) => {
  const result = await db("order_items").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Order Item not found");
  }

  return result;
};
