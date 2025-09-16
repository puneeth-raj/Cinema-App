import { clerkClient } from "@clerk/express";

export const protectAdmin = async (req, resizeBy, next) => {

    try {
        const {userId} = req.auth();

        const user  = await clerkClient.user.getUser(userId)

        if(user.privateMetaData.role !== 'admin'){
            return res.json({success: false, message: "not authorized"})
        }

        next();
    } catch (error) {
         return res.json({success: false, message: "not authorized"})
    }
}