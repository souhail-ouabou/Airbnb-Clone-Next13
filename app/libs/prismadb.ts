/* we import Prima client and we give a global definition of prisma so
it can work throughout  our code  
then we create a constant called client which either searches for 
globalThis.primsa or create a new prisma client 
and then we create an if clause if we are in development then we set 
the globalThis.prisma to newly created client 
---------------------------------------
we creatred that because nextjs 13 hor reloading can cause a bunch of
(new PrismaClient) instances to be created giving us a warning in the 
terminal  , so tgis way we assign the prisma client to a global variable 
which is not affected by got reload 
==> so this is the best practice for using prisma with nex13
*/
import { PrismaClient } from "@prisma/client"

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client
