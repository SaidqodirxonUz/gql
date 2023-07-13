import db from "../../db/index.js";

export const listOrders = (filter = {}) => {
  return db("orders").where(filter).select("*");
};
