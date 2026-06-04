import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import Pricing from "../pages/Pricing/Pricing";
import About from "../pages/About/About";
import Signup from "../pages/Signup/Signup";
import Support from "../pages/Support/Support";
import Products from "../pages/Products/Products";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"signup",
                element:<Signup/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"products",
                element:<Products/>
            },
            {
                path:"pricing",
                element:<Pricing/>
            },
            {
                path:"support",
                element:<Support/>
            },
        ]
    }
])

export default router