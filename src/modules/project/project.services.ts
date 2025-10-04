import { Prisma, Project } from "@prisma/client";
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
const UpdateProjectById = async (id: string, data:Partial<Project>) => {
    const result = await prisma.project.update({
        where: {id},
        data
    })
    return result;
}

/// Delete projects by id
const DeleteProjectById = async (id: string) => {
    const result = await prisma.project.delete({
        where: {id}
    })
    return result;
}

export const ProjectServices = {
    createProject,
    getAllProject,
    getProjectById,
    UpdateProjectById,
    DeleteProjectById
}