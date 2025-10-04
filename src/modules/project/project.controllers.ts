import { Request, Response } from "express";
import { ProjectServices } from "./project.services";

// create project
const createProject = async (req:Request, res:Response) => {
    const result = await ProjectServices.createProject();
    res.status(201).json({status: true, message: "Project Created Successfull"})
    
}

// Get All project
const getAllProject = async (req:Request, res:Response) => {
    const result = await ProjectServices.getAllProject();
    res.status(200).json({status: true, message: "All Project Get Successfull"})
    
}

// Get project by id
const getProjectById = async (req:Request, res:Response) => {
    const result = await ProjectServices.getProjectById();
    res.status(200).json({status: true, message: "Single Project Get Successfull"})
    
}

// Update project by id
const UpdateProjectById = async (req:Request, res:Response) => {
    const result = await ProjectServices.getAllProject();
    res.status(200).json({status: true, message: "Project Updated Successfull"})
    
}

// Delete project By Id
const DeleteProjectById = async (req:Request, res:Response) => {
    const result = await ProjectServices.getAllProject();
    res.status(200).json({status: true, message: "Delete Project Successfull"})
    
}

export const ProjectControllers = {
    createProject,
    getAllProject,
    getProjectById,
    UpdateProjectById,
    DeleteProjectById
}