import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Appointment from '../Pages/Appointment/Appointment/Appointment';
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllUser from "../Pages/Users/AllUser";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUsers from "../Pages/Dashboard/AllUser/AllUsers";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import PrivateRoute from "./PrivateRouter";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../Pages/Dashboard/Payment/Payment";
import DisplayError from "../Pages/Dashboard/DisplayError/DisplayError";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/users',
                element: <AllUser></AllUser>
            },
            {
                path: '/appointment',
                element: <PrivateRoute> <Appointment></Appointment> </PrivateRoute>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: "/dashboard",
                element: <MyAppointment></MyAppointment>
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "/dashboard/adddoctor",
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: "/dashboard/managedoctors",
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({params})=>fetch(`http://localhost:5000/booking/${params.id}`)
            },
        ]
    }
])