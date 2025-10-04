import { Blog, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";


const CrateBlog = async (payload: Prisma.BlogCreateInput) => {
    const result = await prisma.blog.create({ data: payload })
    if (result.id) {
        return {
            success: true,
            message: "Blog Created Successfull",
            result
        }
    }
    return {
        success: false,
        message: "Something wen't wrong!",
        result
    }
}

// get all blogs
const GetAllBlogs = async () => {
    const result = await prisma.blog.findMany()
    return {
        success: true,
        message: "All Blogs Get Successfull",
        result
    }
}

// get blog by id
const GetBlogById = async (id: string) => {
    const result = await prisma.blog.findUnique({
        where: {id}
    })
    return {
        success: true,
        message: "Single Blog Geting Successfull",
        result
    }
}

// Update blog by id
const UpdateBlogById = async (id: string, data: Partial<Blog>) => {
    const result = await prisma.blog.update({
        where: {id},
        data
    })
    return {
        success: true,
        message: "Blog Updated Successfull",
        result
    }
}

// Delete blog by id
const DeleteBlogById = async (id: string) => {
    const result = await prisma.blog.delete({
        where: {id}
    })
    return {
        success: true,
        message: "Blog Delete Successfull",
        result
    }
}


export const BlogServices = {
    CrateBlog,
    GetAllBlogs,
    GetBlogById,
    UpdateBlogById,
    DeleteBlogById
}