import { createBrowserRouter } from "react-router";
import Dashboard from "../page/Dashboard/dashboard";
import LoginScreen from "../page/LoginScreen/LoginScreen";
import SingUpScreen from "../page/SingUpScreen/SingUpScreen";

const Routes = createBrowserRouter([
  {
    path: "/",

    element: <Dashboard />,
    children: [{}],
  },
  {
    path: "/login",

    element: <LoginScreen />,
    children: [{}],
  },
  {
    path: "/singUp",

    element: <SingUpScreen />,
    children: [{}],
  },
]);

export default Routes;
