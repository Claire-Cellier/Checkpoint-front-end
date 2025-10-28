import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homepage/HomePage";
import { PageLayout } from "./components/Layout";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CountryDetail } from "./pages/countryDetail/CountryDetail";


const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT || "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route Component={PageLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/country/:code" Component={CountryDetail} />
            <Route path="*" Component={() => <Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
