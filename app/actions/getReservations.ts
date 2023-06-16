import prisma from "@/app/libs/prismadb";

interface IParams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}

export default async function getReservations(
    params: IParams
) {
    try {
        const { listingId, userId, authorId } = params;

        const query: any = {};
        //information of listing reservatrion
        if (listingId) {
            query.listingId = listingId;
        };
        //reservations from who reserved //trips
        if (userId) {
            query.userId = userId;
        }
        //reservations that other people have made on our listings
        if (authorId) {
            query.listing = { userId: authorId };
        }

        const reservations = await prisma.reservation.findMany({
            where: query,
            include: {
                listing: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        const safeReservations = reservations.map(
            (reservation) => ({
                ...reservation,
                createdAt: reservation.createdAt.toISOString(),
                startDate: reservation.startDate.toISOString(),
                endDate: reservation.endDate.toISOString(),
                listing: {
                    ...reservation.listing,
                    createdAt: reservation.listing.createdAt.toISOString(),
                },
            }));

        return reservations;
    } catch (error: any) {
        throw new Error(error);
    }
}
