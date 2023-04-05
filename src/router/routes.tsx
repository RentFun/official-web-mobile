import { lazy } from "react";

const home = lazy(() => import("./../views/home/index"));

const routes = [
    // home
    {
        path: "/",
        component: home,
    }
];
export default routes;
