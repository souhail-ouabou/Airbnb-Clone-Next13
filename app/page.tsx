import Container from "./components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import getListing from "./actions/getListings";
import EmptyState from "./components/EmptyState";
import getCurrentUser from "./actions/getCurrentUser";



export default async function Home() {
  const listings = await getListing();
  const currentUser = await getCurrentUser();

 // console.log("currentUser : " ,currentUser);
  
  if (listings.length === 0) {
    return (
      <EmptyState showReset />
    );
  }

  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-52 xl:grid-cols-6 gap-8">
      {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
      </div>

    </Container>)
}
