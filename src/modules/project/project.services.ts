import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

/// create project
const createProject = async (payload: Prisma.ProjectCreateInput) => {
    const result = await prisma.project.create({data:payload})
    return result
}

/// get all projects
const getAllProject = async () => {
    const result = await prisma.project.findMany();
    return result
    
}

/// get projects by id
const getProjectById = async (id: string) => {
    const result = await prisma.project.findUnique({
        where: {id}
    })

    return result;
    
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