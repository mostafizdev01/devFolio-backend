import { Request, Response } from "express"
import { userServices } from "./user.service"


const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.createUser(req.body)
        console.log(result)
        res.status(201).json({
            success: true,
            message: "User Created Successfull",
            data: result
        })
    } catch (error) {
        res.status(201).json({
            success: false,
            message: "Something wen't wrong",
            data: error
        })
    }
}


export const userControllers = {
    createUser
}