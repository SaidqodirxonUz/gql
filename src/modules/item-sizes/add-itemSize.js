import db from "../../db/index.js";

export const addItemSize = async (payload) => {
  const result = await db("items_sizes").insert(payload).returning("*");

  return result[0];
};
