'use client'
import { Listing, User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeartButton from "../HeartButton";
import useCountries from "@/app/hooks/useCountries";

interface ListingCardProps {
    data: Listing;
    currentUser?: User | null;
}
const ListingCard: React.FC<ListingCardProps> = ({
    data,
    currentUser
}) => {
    const router = useRouter();
    const { getByValue } = useCountries();
  //  console.log("currentUser Listing card ",currentUser);
    
    const location = getByValue(data.locationValue);
    return (
        <div
            onClick={() => router.push(`/listings/${data.id}`)}
            className="col-span-1 cursor-pointer group">
            <div className="flex flex-col gap-2 w-full">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <Image fill src={data.imageSrc} alt="listing" className="object-cover w-full h-full group-hover:scale-110 transition" />
                    <div className="absolute top-3 right-3">
                        <HeartButton
                            listingId={data.id}
                            currentUser={currentUser}
                        />
                    </div>
                </div>
                <div className="font-semibold text-lg">
                    {location?.region}, {location?.label}
                </div>
                <div className="font-light text-neutral-500">
                    {data.category}
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">
                        $ {data.price}
                    </div>
                    <div className="font-light">
                        night
                    </div>
                </div>
            </div>
        </div >);
}

export default ListingCard;