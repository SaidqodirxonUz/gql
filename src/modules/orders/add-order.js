import db from "../../db/index.js";

export const addOrder = async (payload) => {
  const result = await db("orders").insert(payload).returning("*");

  return result[0];
};
