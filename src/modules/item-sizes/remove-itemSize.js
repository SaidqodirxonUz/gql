import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const removeItemSize = async ({ id }) => {
  const result = await db("item_sizes").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Item-size not found");
  }

  return (await db("item_sizes").where({ id }).delete().returning("*"))[0];
};
