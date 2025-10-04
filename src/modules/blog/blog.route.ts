import { Router } from "express";
import { BlogControllers } from "./blog.controllers";


const router = Router();

router.post("/create-blog", BlogControllers.CrateBlog)

export const BlogRouters = router;