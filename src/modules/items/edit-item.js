import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const editItem = async ({ id, ...payload }) => {
  const result = await db("items").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Item not found");
  }

  return (await db("items").where({ id }).update(payload).returning("*"))[0];
};
