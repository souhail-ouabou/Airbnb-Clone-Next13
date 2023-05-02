import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/libs/prismadb"



// with next-auth and next13 you can getTheCurrentUser without api call just using server component

export default async function getCurrentUser() {
    try {
        const session = await getServerSession(authOptions)
        //   console.log('session', session)
        if (!session?.user?.email) {
            return null
        }
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })
        if (!currentUser) {
            return null
        }
        return currentUser  //no probleme  but we get a warning of Date Objects
        // return {
        //     ...currentUser,
        //     createdAt: currentUser.createdAt.toISOString(),
        //     updatedAt: currentUser.updatedAt.toISOString(),
        //     emailVerified:
        //         currentUser.emailVerified?.toISOString() || null,
        // };

    } catch (error: any) {
        return null
    }

}