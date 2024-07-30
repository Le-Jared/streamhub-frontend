import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css";
import Root from "@/routes/root";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import SeriesPage from "@/pages/SeriesPage";
import WatchPage from "@/pages/WatchPage";
import WatchPartyPage from "@/pages/WatchPartyPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "watch/:seriesId",
        element: <SeriesPage />,
      },
      {
        path: "watch/:seriesId/:episodeId",
        element: <WatchPage />,
      },
      {
        path: "watch-party/:sessionId",
        element: <WatchPartyPage />,
      },
      {
        path: "update-profile",
        element: <UpdateProfilePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
