import { Request, Response } from "express";
import { BlogServices } from "./blog.services";

// create blog
const CrateBlog = async (req:Request, res:Response)=> {
    const result = await BlogServices.CrateBlog(req.body)
     return res.status(201).json(result)
    
}

export const BlogControllers = {
    CrateBlog
}