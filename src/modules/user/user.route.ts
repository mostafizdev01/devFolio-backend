import { Router } from "express"
import { userControllers } from "./user.controller";

const router = Router()

router.post("/register", userControllers.createUser)
router.get("/", userControllers.AllUsers)
router.post("/login", userControllers.LoginAdmin)

export const UserRouters = router;