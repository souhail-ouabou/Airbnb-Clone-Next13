export const dynamic = 'force-dynamic'
import Container from "./components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import getListing from "./actions/getListings";
import EmptyState from "./components/EmptyState";
import getListings, {
  IListingsParams
} from "@/app/actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";


interface HomeProps {
  searchParams: IListingsParams
};
const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListing(searchParams);
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
export default Home;
