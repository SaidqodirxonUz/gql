import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const showOrder = async ({ id }) => {
  const result = db("orders").where({ id }).first();

  if (!result) throw new NotFoundError("Order not found");

  return result;
};
