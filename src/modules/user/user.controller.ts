import { Request, Response } from "express"
import { userServices } from "./user.service"


const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.createUser(req.body)
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

// get all users
const AllUsers = async (req: Request, res: Response) => {
    try {
        const result = await userServices.AllUsers()
        res.status(200).json({
            success: true,
            message: "All Users ReadWrite Successfull",
            data: result
        })
    } catch (error) {
        res.status(301).json({
            success: false,
            message: "Something wen't wrong",
            data: error
        })
    }
}

// login admin controller
const LoginAdmin = async (req: Request, res: Response) => {
    try {
        const result = await userServices.LoginAdmin(req.body)

        if (!result.success) {
            return res.status(401).json(result);
        }

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something wen't wrong",
            data: error
        })
    }
}


export const userControllers = {
    createUser,
    AllUsers,
    LoginAdmin
}