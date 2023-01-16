import AddPost from "../AddPost/AddPost";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import LogIn from "../LogIn/LogIn";
import Register from "../Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");




export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<LogIn/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'addpost',
                element:<AddPost/>
            }

        ]
    }
])