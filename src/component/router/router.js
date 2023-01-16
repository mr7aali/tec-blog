import AddPost from "../AddPost/AddPost";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import LogIn from "../LogIn/LogIn";
import PostDetails from "../PostDetails/PostDetails";
import PrivetRout from "../PrivetRout/PrivetRout";
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
                element:<PrivetRout><Blog/></PrivetRout> 
            },
            {
                path:'/addpost',
                element:<PrivetRout> <AddPost/></PrivetRout>
            },
            {
                path:'/postdetails/:id',
                element:<PostDetails/>,
                loader: ({ params }) => fetch(`https://tec-blog-server.vercel.app/postDetails/${params.id}`)
            }
            

        ]
    },
    
      
    
])