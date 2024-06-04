import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Dashboard/LayoutDashboard/Dashboard";
import AdminHome from "../Dashboard/Admin/AdminHome";
import ManageUser from "../Dashboard/Admin/ManageUser";
import ManageTask from "../Dashboard/Admin/ManageTask";
import TaskCreatorHome from "../Dashboard/TaskCreator/TaskCreatorHome";
import AddNewTask from "../Dashboard/TaskCreator/AddNewTask";
import MyTask from "../Dashboard/TaskCreator/MyTask";
import PurchaseCoin from "../Dashboard/TaskCreator/PurchaseCoin";
import PaymentHistory from "../Dashboard/TaskCreator/PaymentHistory";
import WarkerHome from "./../Dashboard/Worker/WarkerHome";
import TaskList from "../Dashboard/Worker/TaskList";
import MySubmission from "./../Dashboard/Worker/MySubmission";
import Details from "../Dashboard/Worker/Details";
import MyWithdrawals from "../Dashboard/Worker/MyWithdrawals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "manage-user",
        element: <ManageUser />,
      },
      {
        path: "manage-task",
        element: <ManageTask />,
      },
      {
        path: "task-creator-home",
        element: <TaskCreatorHome />,
      },
      {
        path: "add-task",
        element: <AddNewTask />,
      },
      {
        path: "my-task",
        element: <MyTask />,
      },
      {
        path: "purchase-coin",
        element: <PurchaseCoin />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "worker-home",
        element: <WarkerHome />,
      },
      {
        path: "worker-tasklist",
        element: <TaskList />,
      },
      {
        path: "my-submission",
        element: <MySubmission />,
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`),
      },
      {
        path: "withdrawal",
        element: <MyWithdrawals />,
      },
    ],
  },
]);

export default router;
