import { Router } from "express";
import { ProjectControllers } from "./project.controllers";


const router = Router();

router.post("/create-project", ProjectControllers.createProject)
router.get("/", ProjectControllers.getAllProject)
router.get("/:id", ProjectControllers.getProjectById)
router.patch("/:id", ProjectControllers.UpdateProjectById)
router.delete("/:id", ProjectControllers.DeleteProjectById)

export const ProjectRoutes = router;