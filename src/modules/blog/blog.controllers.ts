import { Request, Response } from "express";
import { BlogServices } from "./blog.services";

// create blog
const CrateBlog = async (req: Request, res: Response) => {
    try {
        const result = await BlogServices.CrateBlog(req.body)
        if(result.success){
            return res.status(201).json(result)
        }
        return res.status(500).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }

}

// get All Blogs
const GetAllBlogs = async (req: Request, res: Response) => {
    try {
        const result = await BlogServices.GetAllBlogs()
        if(result.success){
            return res.status(200).json(result)
        }
        return res.status(500).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }

}

// get Blog by id
const GetBlogById = async (req: Request, res: Response) => {
    try {
        const result = await BlogServices.GetBlogById(req.params.id as string)
        if(result.success){
            return res.status(200).json(result)
        }
        return res.status(500).json({success: true, message: "Something wen't wrong!"})
    } catch (error) {
        return res.status(500).json(error)
    }

}

// Update Blog by id
const UpdateBlogById = async (req: Request, res: Response) => {
    try {
        const params = req.params.id as string;
        const body = req.body;
        const result = await BlogServices.UpdateBlogById(params, body)
        if(result.success){
            return res.status(200).json(result)
        }
        return res.status(500).json({success: true, message: "Something wen't wrong!"})
    } catch (error) {
        return res.status(500).json(error)
    }

}

// Delete Blog by id
const DeleteBlogById = async (req: Request, res: Response) => {
    try {
        const result = await BlogServices.DeleteBlogById(req.params.id as string)
        if(result.success){
            return res.status(200).json(result)
        }
        return res.status(500).json({success: true, message: "Something wen't wrong!"})
    } catch (error) {
        return res.status(500).json(error)
    }

}


export const BlogControllers = {
    CrateBlog,
    GetAllBlogs,
    GetBlogById,
    UpdateBlogById,
    DeleteBlogById
}