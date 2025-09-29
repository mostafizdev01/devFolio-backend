import { Admin, Prisma } from "@prisma/client"
import { prisma } from "../../config/db"


const createUser = async (payload: Prisma.AdminCreateInput)=> {
    
    const {email, password, ...rest} = payload

    const isAdminExist = await prisma.admin.findUnique({
        where: {email}
    })

    if(isAdminExist){
      return console.log("Email Already Exists");
        
    }

    const result = await prisma.admin.create({
        data:payload
    })
    return result;
}


export const userServices = {
    createUser
}