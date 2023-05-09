import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://related-krill-30.hasura.app/v1/graphql",
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    "x-hasura-admin-secret":
      "Qyj3Xc8um6m0gy4pPbeURz0H9N8hknzaM9BFC86NhHU6qaR5DI2UTaVrkxQgrSvJ",
  },
});
