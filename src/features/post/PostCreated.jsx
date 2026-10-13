import PostCreatedForm from "./PostCreatedForm";
import useGetVehicleInfinite from "../vehicle/useGetVehicleInfinite";
import MiniSpinner from "../../ui/MiniSpinner";
import PostCreatedEmpty from "./PostCreatedEmpty";

function PostCreated() {
  const { isLoading, vehicles, fetchNextPage, hasMore, page } =
    useGetVehicleInfinite();
  if (isLoading) return <MiniSpinner />;

  return vehicles.length ? (
    <PostCreatedForm
      vehicles={vehicles}
      fetchNextPage={fetchNextPage}
      hasMore={hasMore}
      page={page}
    />
  ) : (
    <PostCreatedEmpty />
  );
}

export default PostCreated;
