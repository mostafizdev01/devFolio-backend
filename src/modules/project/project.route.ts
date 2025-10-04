import { Router } from "express";
import { ProjectControllers } from "./project.controllers";


const router = Router();

router.post("/create-project", ProjectControllers.createProject)

export const ProjectRoutes = router;