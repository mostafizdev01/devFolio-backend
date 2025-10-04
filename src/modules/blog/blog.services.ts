import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";


const CrateBlog = async (payload: Prisma.BlogCreateInput) => {
    const result = await prisma.blog.create({ data: payload })
    return {
        success: true,
        message: "Blog Created Successfull",
        payload
    }
}

export const BlogServices = {
    CrateBlog
}