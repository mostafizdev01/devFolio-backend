import { Request, Response } from "express"
import { userServices } from "./user.service"


const createUser = (req:Request, res:Response)=> {
    const result = userServices.createUser()
    res.status(201).json({
        success: true,
        message: "User Created Successfull",
        data: result
    })
}


export const userControllers = {
    createUser
}