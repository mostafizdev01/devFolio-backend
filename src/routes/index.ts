import { Router } from "express";
import { UserRouters } from "../modules/user/user.route";


export const router = Router();

router.use((req, res, next) => {
  console.log(`🔹 Module Router Hit → [${req.method}] ${req.originalUrl}`);
  next();
});

const moduleRoutes = [
    {
        path: "/user",
        route: UserRouters
    }
]

moduleRoutes.forEach((route)=> {
    router.use(route.path, route.route)
})