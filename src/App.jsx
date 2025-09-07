import React from "react";
import { createHashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Eula from "./pages/Eula";

const router = createHashRouter([
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
    ],
  },
]);

export default router;