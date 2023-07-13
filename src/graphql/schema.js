import { makeExecutableSchema } from "@graphql-tools/schema";
import clientsModule from "../modules/clients/_index.js";
import usersModule from "../modules/users/_index.js";
import itemSizeModule from "../modules/item-sizes/_index.js";
import itemsModule from "../modules/items/_index.js";
import orderItemsModule from "../modules/order-items/_index.js";
import ordersModule from "../modules/orders/_index.js";

const typdefsArr = [
  clientsModule.typeDefs,
  itemSizeModule.typeDefs,
  itemsModule.typeDefs,
  orderItemsModule.typeDefs,
  ordersModule.typeDefs,
  usersModule.typeDefs,
];
const resolversArr = [
  clientsModule.resolvers,
  itemSizeModule.resolvers,
  itemsModule.resolvers,
  orderItemsModule.resolvers,
  ordersModule.resolvers,
  usersModule.resolvers,
];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});
