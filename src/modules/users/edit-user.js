import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const editUser = async ({ id, ...payload }) => {
  const user = await db("users").where({ id }).first();

  let passwordChange = {};
  if (payload.password) {
    passwordChange.password = await bcryptjs.hash(payload.password, 10);
  }

  if (!user) throw new NotFoundError("User not found");

  return (await db("users").where({ id }).update({ ...payload, ...passwordChange }).returning("*"))[0];
};
