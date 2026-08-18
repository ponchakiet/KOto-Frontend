import VehicleList from "./VehicleList";
import SyncLoader from "react-spinners/SyncLoader";
import useGetPostsVehicle from "./useGetPostsVehicle";

function VehicleForSell() {
  const { isLoading, content } = useGetPostsVehicle("SELL");

  if (isLoading) return <SyncLoader />;

  return <VehicleList data={content} />;
}

export default VehicleForSell;
