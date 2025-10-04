import { Request, Response } from "express";
import { ProjectServices } from "./project.services";

// create project
const createProject = async (req:Request, res:Response) => {
    const result = await ProjectServices.createProject();
    res.status(201).json({status: true, message: "Project Created Successfull"})
    
}

// Get All project
const getAllProject = async (req:Request, res:Response) => {
    const result = await ProjectServices.createProject();
    res.status(201).json({status: true, message: "Project Created Successfull"})
    
}

export const ProjectControllers = {
    createProject
}