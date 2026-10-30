import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
const uri = import.meta.env.VITE_GRAPHQL_URL?.trim();
export const apolloClient = uri
  ? new ApolloClient({
      link: new HttpLink({ uri }),
      cache: new InMemoryCache(),
      connectToDevTools: import.meta.env.DEV,
    })
  : null;
