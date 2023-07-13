import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const showClient = async ({ id }) => {
  const result = db("clents").where({ id }).first();

  if (!result) throw new NotFoundError("Client not found");

  return result;
};
