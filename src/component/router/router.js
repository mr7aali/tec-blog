import Home from "../Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Header } = require("../Page/Header/Header");



export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    }
])