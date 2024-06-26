import { Route } from "@interfaces/Route";
import { lazy } from "react";

const Home = lazy(() => import("@pages/home/Home"));
const Account = lazy(() => import("@pages/account/Account"));
const Mens = lazy(() => import("@pages/collection/Mens"));
const Womens = lazy(() => import("@pages/collection/Womens"));

const routes: Route[] = [
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
    },
    {
        path: "/collections/mens-wear",
        component: Mens,
        isPrivate: false,
        forEmployeeOnly: false,
    },
    {
        path: "/collections/womens-wear",
        component: Womens,
        isPrivate: false,
        forEmployeeOnly: false,
    }
];

export const privateRoutes: Route[] = routes.filter(route => route.isPrivate);
export const publicRoutes: Route[] = routes.filter(route => !route.isPrivate);