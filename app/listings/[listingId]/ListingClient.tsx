'use client'

import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import { Listing, User } from "@prisma/client";


interface ListingClientProps {
    listing: Listing & {
        user: User;
    };
    currentUser?: User | null;
}



const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    currentUser
}) => {
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead
                        title={listing.title}
                        imageSrc={listing.imageSrc}
                        locationValue={listing.locationValue}
                        id={listing.id}
                        currentUser={currentUser}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                    </div>
                </div>
            </div>



        </Container>);
}

export default ListingClient;