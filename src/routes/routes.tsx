import { Route } from "@interfaces/Route";
import { lazy } from "react";

const Home = lazy(() => import("@pages/Home"));
const Account = lazy(() => import("@pages/Account"));

export const privateRoutes: Route[] = [
    {
        path: "/order",
        component: Home,
        isPrivate: true,
        forEmployeeOnly: false,
    },
    {
        path: "/app/order",
        component: Home,
        isPrivate: true,
        forEmployeeOnly: true,
    }
];

export const publicRoutes: Route[] = [
    {
        path: "/",
        component: Home,
        isPrivate: false,
        forEmployeeOnly: false,
    },
    {
        path: "/home",
        component: Home,
        isPrivate: false,
        forEmployeeOnly: false,
    },
    {
        path: "/account",
        component: Account,
        isPrivate: false,
        forEmployeeOnly: false,
    }
];
