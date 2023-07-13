import { readFileSync } from "fs";
import { join } from "path";
import { listClients } from "./list-clients.js";
import { showClient } from "./show-client.js";
import { addClient } from "./add-clients.js";
import { editClient } from "./edit-client.js";
import { removeClient } from "./remove-client.js";
import { loginClient } from "./login-client.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "clients", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    clients: () => {
      return listClients();
    },
    client: (_, args) => {
      return showClient({ id: args.id });
    },
  },

  Mutation: {
    createClient: (_, args) => {
      return addClient(args.input);
    },
    updateClient: (_, args) => {
      return editClient({ id: args.id, ...args.input });
    },
    removeClient: (_, args) => {
      return removeClient({ id: args.id });
    },
    loginClient: (_, args) => {
      return loginClient(args.input);
    },
  },
};

export default { typeDefs, resolvers };
