import { readFileSync } from "fs";
import { join } from "path";
import { listOrders } from "./list-orders.js";
import { showOrder } from "./show-order.js";
import { addOrder } from "./add-order.js";
import { editOrder } from "./edit-order.js";
import { removeOrder } from "./remove-order.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "orders", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    orders: () => {
      return listOrders();
    },
    order: (_, args) => {
      return showOrder({ id: args.id });
    },
  },

  Mutation: {
    createOrder: (_, args) => {
      return addOrder(args.input);
    },
    updateOrder: (_, args) => {
      return editOrder({ id: args.id, ...args.input });
    },
    removeOrder: (_, args) => {
      return removeOrder({ id: args.id });
    },
  },
};

export default { typeDefs, resolvers };
