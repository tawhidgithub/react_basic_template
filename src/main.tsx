import { createRoot } from "react-dom/client";
import "./global.css";
import { RouterProvider } from "react-router";
import Routes from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={Routes} />
);
