import { Router } from "express";
import { BlogControllers } from "./blog.controllers";


const router = Router();

router.post("/create-blog", BlogControllers.CrateBlog)
router.get("/", BlogControllers.GetAllBlogs)
router.get("/:id", BlogControllers.GetBlogById)
router.patch("/:id", BlogControllers.UpdateBlogById)
router.delete("/:id", BlogControllers.DeleteBlogById)

export const BlogRouters = router;