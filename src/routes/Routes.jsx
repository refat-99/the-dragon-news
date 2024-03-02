import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import PrivatePage from "../PrivatePage/PrivatePage";
import News from "../pages/News/News";
import Comment from "../pages/Comment/Comment";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivatePage><News></News></PrivatePage>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <PrivatePage><Career></Career></PrivatePage>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/comment",
                element:<Comment></Comment>
            }
        ]
    }    
]);

export default router;