import VehicleList from "./VehicleList";
import SyncLoader from "react-spinners/SyncLoader";
import useGetPostsVehicle from "./useGetPostsVehicle";

function VehicleForRent() {
  const { isLoading, content } = useGetPostsVehicle("RENT");
  if (isLoading) return <SyncLoader />;

  return <VehicleList data={content} />;
}

export default VehicleForRent;
