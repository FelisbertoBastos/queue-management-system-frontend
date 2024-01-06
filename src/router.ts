import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/queue-management/Home";

export const router = createBrowserRouter([{ path: "/", Component: Home }]);
