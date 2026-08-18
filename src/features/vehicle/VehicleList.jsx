import Button from "../../ui/Button";
import VehicleCard from "./VehicleCard";

function VehicleList({ data }) {
  return (
    <div>
      <div className="flex border-t-gray-200 border-t-2 pt-8">
        {data.map((item) => (
          <VehicleCard key={item.id} vehicle={item} />
        ))}
      </div>
      <div className="py-5 flex justify-center">
        <Button>Xem thêm n tin khác</Button>
      </div>
    </div>
  );
}

export default VehicleList;
