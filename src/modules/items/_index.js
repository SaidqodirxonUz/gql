import { readFileSync } from "fs";
import { join } from "path";
import { listItems } from "./list-items.js";
import { showItem } from "./show-item.js";
import { addItem } from "./add-item.js";
import { editItem } from "./edit-item.js";
import { removeItem } from "./remove-item.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "items", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    items: () => {
      return listItems();
    },
    item: (_, args) => {
      return showItem({ id: args.id });
    },
  },

  Mutation: {
    createItem: (_, args) => {
      return addItem(args.input);
    },
    updateItem: (_, args) => {
      return editItem({ id: args.id, ...args.input });
    },
    removeItem: (_, args) => {
      return removeItem({ id: args.id });
    },
  },
};

export default { typeDefs, resolvers };
