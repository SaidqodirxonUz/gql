import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const editItemSize = async ({ id, ...payload }) => {
  const result = await db("item_sizes").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Item_size not found");
  }

  return (
    await db("item_sizes").where({ id }).update(payload).returning("*")
  )[0];
};
