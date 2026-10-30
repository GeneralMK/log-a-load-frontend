import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import { apolloClient } from "./lib/apollo";
import "./styles.css";
createRoot(document.getElementById("root")!).render(
  apolloClient ? (
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  ) : (
    <App />
  ),
);
