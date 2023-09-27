import {
    ADMIN_ROUTE,
    CREATOR_ROUTE,
    EVENT_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    USER_ROUTE
} from "./utils/consts";

import Login from "./pages/login";
import Home from "./pages/event/home";
import registration from "./pages/registration";
import Creator from "./pages/creator/creator";
import User from "./pages/user/user";
import Admin from "./pages/admin/admin";

export const  userRoutes = [

    {
        path: USER_ROUTE,
        Component: User
    },
]


export  const creatorRoutes = [
    {
        path: CREATOR_ROUTE,
        Component: Creator
    },

]
export  const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },

]

export  const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component:Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: registration
    },
    {
        path: EVENT_ROUTE + '/:id',
        Component: Event
    },
]