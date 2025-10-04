import { Router } from "express";
import { UserRouters } from "../modules/user/user.route";
import { BlogRouters } from "../modules/blog/blog.route";


export const router = Router();

const moduleRoutes = [
    {
        path: "/user",
        route: UserRouters
    },
    {
        path: "/blog",
        route: BlogRouters
    }
]

moduleRoutes.forEach((route)=> {
    router.use(route.path, route.route)
})