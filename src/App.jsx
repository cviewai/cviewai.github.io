import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Eula from "./pages/Eula";
import ContactPage from "./pages/ContactPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "eula",
        element: <Eula />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
