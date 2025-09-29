import bcrypt from 'bcrypt';
import { Admin, Prisma } from "@prisma/client"
import { prisma } from "../../config/db"


const createUser = async (payload: Prisma.AdminCreateInput) => {

    const { email, password, ...rest } = payload

    const isAdminExist = await prisma.admin.findUnique({
        where: { email }
    })

    if (isAdminExist) {
        return console.log("Email Already Exists");

    }

    const result = await prisma.admin.create({
        data: payload
    })
    return result;
}

/// get all user or admin

const AllUsers = async () => {
    const result = await prisma.admin.findMany();
    return result
}

/// login admin

const LoginAdmin = async ({ email, password }: { email: string, password: string }) => {
    const admin = await prisma.admin.findUnique({
        where: { email }
    })

    if (!admin) {
        return {
            success: false,
            message: "Email Does't Match"
        }
    }

    const isPasswordMatch = await bcrypt.compare(password, admin.password)

    if (!isPasswordMatch) {
        return {
            success: false,
            message: "Password does't match"
        }
    }

    return {
        success: true,
        message: "Login Successfull",
        admin
    }
}


export const userServices = {
    createUser,
    AllUsers,
    LoginAdmin
}