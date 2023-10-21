import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "src/pages/auth-layout";
import MainLayout from "src/pages/main-layout";


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>
    },

    {
        path: "/auth",
        element: <AuthLayout/> //TODO: It will be changed
    }
])

export default appRouter