import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";


import Launches from "./components/Launches";




const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h1 style={{justifyContent: "center", textAlign: "center"}}>spaceX</h1>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
