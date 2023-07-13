import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const editClient = async ({ id, ...payload }) => {
  const client = await db("clients").where({ id }).first();

  let passwordChange = {};
  if (payload.password) {
    passwordChange.password = await bcryptjs.hash(payload.password, 10);
  }

  if (!client) throw new NotFoundError("Client not found");

  return (await db("clients").where({ id }).update({ ...payload, ...passwordChange}).returning("*"))[0];
};
