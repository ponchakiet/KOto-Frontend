import Thumbnail from "../../ui/Thumbnail";
import VehicleDetail from "./VehicleDetail";

function VehicleView({ vehicle }) {
  const { contents, ...rest } = vehicle;

  return (
    <div className="overflow-hidden">
      <Thumbnail images={contents} />
      <VehicleDetail vehicle={rest} />
    </div>
  );
}

export default VehicleView;
