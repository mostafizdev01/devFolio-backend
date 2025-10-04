import { Request, Response } from "express";
import { BlogServices } from "./blog.services";


const CrateBlog = async (req:Request, res:Response)=> {
    const result = await BlogServices.CrateBlog()
     return res.status(201).json({
        status: true,
        message: "Blog card working.."
     })
    
}

export const BlogControllers = {
    CrateBlog
}