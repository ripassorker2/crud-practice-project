import { createBrowserRouter } from "react-router-dom";
import AddBlog from "../../AddBlog/AddBlog";
import Main from "../../Main/Main";
import CHeekOut from "../Cheekout/Cheekout";
import CardDetails from "../Home/CardDetails";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Orders from "../Orders/Orders";
import Resister from "../Resisiter/Resister";
import Update from "../Update/Update";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/place",
        element: <AddBlog />,
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`https://crud-server-ten.vercel.app/place/${params.id}`),
      },
      {
        path: "/cheekout/:id",
        element: (
          <PrivetRoute>
            <CHeekOut />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://crud-server-ten.vercel.app/place/${params.id}`),
      },
      {
        path: "/place/:id",
        element: (
          <PrivetRoute>
            <CardDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://crud-server-ten.vercel.app/place/${params.id}`),
      },
      {
        path: "/orders",
        element: (
          <PrivetRoute>
            <Orders />
          </PrivetRoute>
        ),
        loader: ({ params }) => fetch(`https://crud-server-ten.vercel.app/orders`),
      },
      { path: "/login", element: <Login /> },
      { path: "/resister", element: <Resister /> },
    ],
  },
]);
