import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Listings, Home, Host, Listing, NotFound, User } from "./sections";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./styles/index.css";

const client = new ApolloClient({
  uri: "/api",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/host",
    element: <Host />,
  },
  {
    path: "/listing/:id",
    element: <Listing />,
  },
  {
    path: "/listings/:location",
    element: <Listings />,
  },
  {
    path: "/user/:id",
    element: <User />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
