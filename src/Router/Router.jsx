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
import Update from "../Dashboard/TaskCreator/Update";
import Payment from "../Dashboard/TaskCreator/Payment";
import Error from "../Pages/Error";
import AdminPrivateRoute from "./AdminPrivateRoute";
import TaskCreatorPrivateRoute from "./TaskCreatorPrivateRoute";
import WorkerPrivateRoute from "./WorkerPrivateRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
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
    element: (
      <PrivateRoute>
        {" "}
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // For Admin Dashboard
      {
        path: "admin-home",
        element: (
          <AdminPrivateRoute>
            <AdminHome />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manage-user",
        element: (
          <AdminPrivateRoute>
            <ManageUser />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manage-task",
        element: (
          <AdminPrivateRoute>
            <ManageTask />
          </AdminPrivateRoute>
        ),
      },

      // For TaskCreator Dashboard
      {
        path: "task-creator-home",
        element: (
          <TaskCreatorPrivateRoute>
            <TaskCreatorHome />
          </TaskCreatorPrivateRoute>
        ),
      },
      {
        path: "add-task",
        element: (
          <TaskCreatorPrivateRoute>
            <AddNewTask />
          </TaskCreatorPrivateRoute>
        ),
      },
      {
        path: "my-task",
        element: (
          <TaskCreatorPrivateRoute>
            <MyTask />
          </TaskCreatorPrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <TaskCreatorPrivateRoute>
            <Update />
          </TaskCreatorPrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://picopai-server.vercel.app/tasks/${params.id}`),
      },
      {
        path: "purchase-coin",
        element: (
          <TaskCreatorPrivateRoute>
            <PurchaseCoin />
          </TaskCreatorPrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <TaskCreatorPrivateRoute>
            <Payment />
          </TaskCreatorPrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <TaskCreatorPrivateRoute>
            <PaymentHistory />
          </TaskCreatorPrivateRoute>
        ),
      },

      // For Worker Dashboard
      {
        path: "worker-home",
        element: (
          <WorkerPrivateRoute>
            <WarkerHome />
          </WorkerPrivateRoute>
        ),
      },
      {
        path: "worker-tasklist",
        element: (
          <WorkerPrivateRoute>
            <TaskList />
          </WorkerPrivateRoute>
        ),
      },
      {
        path: "my-submission",
        element: (
          <WorkerPrivateRoute>
            <MySubmission />
          </WorkerPrivateRoute>
        ),
      },
      {
        path: "details/:id",
        element: (
          <WorkerPrivateRoute>
            <Details />
          </WorkerPrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://picopai-server.vercel.app/tasks/${params.id}`),
      },
      {
        path: "withdrawal",
        element: (
          <WorkerPrivateRoute>
            <MyWithdrawals />
          </WorkerPrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
