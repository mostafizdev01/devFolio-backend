import { Prisma } from "@prisma/client";
import { prisma } from "../config/db"
import bcrypt from "bcrypt"

export const seedAdmin = async () => {
    try {
        const isAdminExist = await prisma.admin.findUnique({
            where: { email: process.env.ADMIN_EMAIL as string }
        })

        if (isAdminExist) {
            console.log("Admin Already Exists!");
            return;
        }

        const hashPassword = await bcrypt.hash(process.env.ADMIN_PASS as string, Number(process.env.BCRYPT_SALT_ROUND))

        const admin = await prisma.admin.create({
            data: {
                name: "Admin",
                role: "ADMIN",
                email: process.env.ADMIN_EMAIL as string,
                password: hashPassword
            }
        })
        console.log("Admin created", admin)
    } catch (error) {
        console.log(error)
    }
}