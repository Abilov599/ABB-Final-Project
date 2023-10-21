import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "src/pages/auth-layout";
import Login from "src/pages/auth-layout/login";
import MainLayout from "src/pages/main-layout";


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>
    },

    {
        path: "/auth",
        element: <AuthLayout/>, 
        children: [
            {
                index: true,
                element: <Navigate to={'/auth/login'}/>
            },
            {
                path: "login",
                element: <Login/>
            }
        ]
    }
])

export default appRouter