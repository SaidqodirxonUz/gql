import db from "../../db/index.js";

export const listOrderItems = (filter = {}) => {
  return db("order_items").where(filter).select("*");
};
