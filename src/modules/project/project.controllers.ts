import { Request, Response } from "express";
import { ProjectServices } from "./project.services";

// create project
const createProject = async (req: Request, res: Response) => {
    try {
        const result = await ProjectServices.createProject(req.body);
        res.status(201).json({
            status: true,
            message: "Project Created Successfull",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Something wen't wrong!",
            data: error
        })
    }

}

// Get All project
const getAllProject = async (req: Request, res: Response) => {
    const result = await ProjectServices.getAllProject();
    res.status(200).json({ status: true, message: "All Project Get Successfull" })

}

// Get project by id
const getProjectById = async (req: Request, res: Response) => {
    const result = await ProjectServices.getProjectById();
    res.status(200).json({ status: true, message: "Single Project Get Successfull" })

}

// Update project by id
const UpdateProjectById = async (req: Request, res: Response) => {
    const result = await ProjectServices.getAllProject();
    res.status(200).json({ status: true, message: "Project Updated Successfull" })

}

// Delete project By Id
const DeleteProjectById = async (req: Request, res: Response) => {
    const result = await ProjectServices.getAllProject();
    res.status(200).json({ status: true, message: "Delete Project Successfull" })

}

export const ProjectControllers = {
    createProject,
    getAllProject,
    getProjectById,
    UpdateProjectById,
    DeleteProjectById
}