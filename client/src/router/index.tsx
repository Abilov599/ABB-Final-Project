import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "src/pages/auth-layout";
import Login from "src/pages/auth-layout/login";
import Register from "src/pages/auth-layout/register";
import MainLayout from "src/pages/main-layout";
import Favorites from "src/pages/main-layout/favorites";
import Home from "src/pages/main-layout/home";
import Messages from "src/pages/main-layout/messages";
import Notifications from "src/pages/main-layout/notifications";


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'favorites',
                element: <Favorites/>
            },
            {
                path: 'notifications',
                element: <Notifications/>
            },
            {
                path: 'messages',
                element: <Messages/>
            },
            
        ]
    },

    {
        path: "/auth",
        element: <AuthLayout/>, 
        children: [
            {
                index: true,
                element: <Navigate to={'/auth/login'} replace={true} />
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            }
        ]
    }
])

export default appRouter