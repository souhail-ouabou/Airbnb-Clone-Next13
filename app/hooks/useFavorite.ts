import { User } from "@prisma/client";
import { useCallback, useMemo } from "react";
import useLoginModal from "./useLoginModal";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

interface IUseFavorite {
    listingId: string;
    currentUser?: User | null
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
    const loginModal = useLoginModal();
    const router = useRouter();

    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || [];
        return list.includes(listingId) // true or false
    }, [currentUser, listingId])


    const toggleFavorite = useCallback(async(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if (!currentUser) {
            return loginModal.onOpen();
        }
        try {
            let request;
      
            if (hasFavorited) {
              request = () => axios.delete(`/api/favorites/${listingId}`);
            } else {
              request = () => axios.post(`/api/favorites/${listingId}`);
            }
      
            await request();
            router.refresh();
            toast.success('Success');
          } catch (error) {
            toast.error('Something went wrong.');
          }

    }, [currentUser, hasFavorited, listingId, loginModal, router])

  return {
    hasFavorited,
    toggleFavorite,
  }
}



export default useFavorite;