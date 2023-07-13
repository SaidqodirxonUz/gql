import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const removeOrder = async ({ id }) => {
  const result = await db("orders").where({ id }).first();

  if (!result) {
    throw new NotFoundError("User not found");
  }

  return (await db("orders").where({ id }).delete().returning("*"))[0];
};
