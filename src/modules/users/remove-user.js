import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const removeUser = async ({ id }) => {
  const result = await db("users").where({ id }).first();

  if (!result) {
    throw new NotFoundError("User not found");
  }

  return (await db("users").where({ id }).delete().returning("*"))[0];
};
