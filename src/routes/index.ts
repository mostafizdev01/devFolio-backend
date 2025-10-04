import { Router } from "express";
import { UserRouters } from "../modules/user/user.route";
import { BlogRouters } from "../modules/blog/blog.route";
import { ProjectRoutes } from "../modules/project/project.route";


export const router = Router();

const moduleRoutes = [
    {
        path: "/user",
        route: UserRouters
    },
    {
        path: "/blog",
        route: BlogRouters
    },
    {
        path: "/project",
        route: ProjectRoutes
    }
]

moduleRoutes.forEach((route)=> {
    router.use(route.path, route.route)
})