import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

/// create project
const createProject = async (payload: Prisma.ProjectCreateInput) => {
    const result = await prisma.project.create({data:payload})
    return result
}

/// get all projects
const getAllProject = async () => {
    console.log("get all Project is clicked..");
    
}

/// get projects by id
const getProjectById = async () => {
    console.log("get single Project is clicked..");
    
}

/// Updated projects by id
const UpdateProjectById = async () => {
    console.log("Update single Project is clicked..");
}

/// Delete projects by id
const DeleteProjectById = async () => {
    console.log("Delete single Project is clicked..");
}

export const ProjectServices = {
    createProject,
    getAllProject,
    getProjectById,
    UpdateProjectById,
    DeleteProjectById
}