import { readFileSync } from "fs";
import { join } from "path";
import { listOrderItems } from "./list-orderItems.js";
import { showOrderItem } from "./show-orderItem.js";
import { addOrderItem } from "./add-orderItem.js";
import { editOrderItem } from "./edit-orderItem.js";
import { removeOrderItem } from "./remove-orderItem.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "order-items", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    orderItems: () => {
      return listOrderItems();
    },
    orderItem: (_, args) => {
      return showOrderItem({ id: args.id });
    },
  },

  Mutation: {
    createOrderItem: (_, args) => {
      return addOrderItem(args.input);
    },
    updateOrderItem: (_, args) => {
      return editOrderItem({ id: args.id, ...args.input });
    },
    removeOrderItem: (_, args) => {
      return removeOrderItem({ id: args.id });
    },
  },
};

export default { typeDefs, resolvers };
