import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Details from "../details/Details";
import Register from "../pages/register/Register";
import Services from "../pages/services/Services";
import ServiceRules from "../rules/ServiceRules";
import PrivateRoute from "../private/PrivateRoute";
import ErrorPage from "../component/errorPage";

const myCreateRoute = createBrowserRouter ([
{
    path : '/',
    element :<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children :[

{
    path : '/',
    element : <Home></Home>,
    loader : ()=>fetch('/Data.json')
},
{
    path : '/login',
    element : <Login></Login>
},
{
    path : '/card/:id',
    element :<PrivateRoute><Details></Details></PrivateRoute>,
    loader:()=>fetch('/Data.json')
   
},
{
    path : '/register',
    element :<Register></Register>
},
{
    path : '/services',
    element : <Services></Services>
},
{
    path : '/rules',
    element :<PrivateRoute> <ServiceRules></ServiceRules></PrivateRoute>

}


    ]
}



]) 
   

export default myCreateRoute;