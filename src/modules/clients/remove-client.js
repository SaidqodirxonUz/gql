import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const removeClient = async ({ id }) => {
  const result = await db("clients").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Clients not found");
  }

  return (await db("clients").where({ id }).delete().returning("*"))[0];
};
