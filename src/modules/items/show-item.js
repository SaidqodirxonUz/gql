import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const showItem = async ({ id }) => {
  const item = await db("items").where({ id }).first();

  if (!item) {
    throw new NotFoundError("Item not found");
  }

  return item;
};
