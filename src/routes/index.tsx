import { createBrowserRouter } from "react-router";
import App from "../App";
import User from "../pages/User";
import Tasks from "../pages/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "user",
        Component: User,
      },
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
]);

export default router;
