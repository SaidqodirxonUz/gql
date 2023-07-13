import { readFileSync } from "fs";
import { join } from "path";
import { showItemSize } from "./show-itemSize.js";
import { addItemSize } from "./add-itemSize.js";
import { editItemSize } from "./edit-itemSize.js";
import { removeItemSize } from "./remove-itemSize.js";
import { listItemsSize } from "./list-itemSize.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "item-sizes", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    itemsSize: () => {
      return listItemsSize();
    },
    itemSize: (_, args) => {
      return showItemSize({ id: args.id });
    },
  },

  Mutation: {
    createItemSize: (_, args) => {
      return addItemSize(args.input);
    },
    updateItemSize: (_, args) => {
      return editItemSize({ id: args.id, ...args.input });
    },
    removeItemSize: (_, args) => {
      return removeItemSize({ id: args.id });
    },
  },
};

export default { typeDefs, resolvers };
