import { readFileSync } from "fs";
import { join } from "path";
import { listUsers } from "./list-users.js";
import { showUser } from "./show-user.js";
import { addUser } from "./add-user.js";
import { editUser } from "./edit-user.js";
import { removeUser } from "./remove-user.js";
import { loginUser } from "./login-user.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "users", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    users: () => {
      return listUsers();
    },
    user: (_, args) => {
      return showUser({ id: args.id });
    },
  },

  Mutation: {
    createUser: (_, args) => {
      return addUser(args.input);
    },
    updateUser: (_, args) => {
      return editUser({ id: args.id, ...args.input });
    },
    removeUser: (_, args) => {
      return removeUser({ id: args.id });
    },
    loginUser: (_, args) => {
      return loginUser(args.input);
    },
  },
};

export default { typeDefs, resolvers };
