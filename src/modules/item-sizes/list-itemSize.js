import db from "../../db/index.js";

export const listItemsSize = (filter = {}) => {
  return db("item_sizes").where(filter).select("*");
};
