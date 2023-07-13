import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const editOrder = async ({ id, ...payload }) => {
  const order = await db("orders").where({ id }).first();

  if (!order) throw new NotFoundError("Order not found");

  return (await db("orders").where({ id }).update(payload).returning("*"))[0];
};
