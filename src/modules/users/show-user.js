import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const showUser = async ({ id }) => {
  const result = db("users").where({ id }).first();

  if (!result) throw new NotFoundError("User not found");

  return result;
};
