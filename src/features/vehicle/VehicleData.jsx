import MiniSpinner from "../../ui/MiniSpinner";
import useGetVehicle from "./useGetVehicle";
import VehicleView from "./VehicleView";
import MenuVehicleDetail from "./MenuVehicleDetail";
import HistoryPost from "../post/HistoryPost";

function VehicleData() {
  const { isLoading, vehicle } = useGetVehicle();
  if (isLoading) return <MiniSpinner />;
  return (
    <div className="mx-auto w-full grid grid-cols-[0.65fr_0.35fr] gap-10">
      <VehicleView vehicle={vehicle} />
      <div className="sticky top-6 self-start">
        <MenuVehicleDetail vehicle={vehicle} />
        <HistoryPost />
      </div>
    </div>
  );
}
