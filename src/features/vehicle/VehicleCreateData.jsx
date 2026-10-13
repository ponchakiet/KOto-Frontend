import { Link, Navigate } from "react-router-dom";
import MiniSpinner from "../../ui/MiniSpinner";
import Button from "../../ui/Button";
import useGetVehicleDraft from "./useGetVehicleDraft";
import DraftItem from "./DraftItem";

function VehicleCreateData() {
  const { isLoading, drafts } = useGetVehicleDraft();
  if (isLoading) return <MiniSpinner />;
  if (!drafts?.length) {
    return <Navigate to="/create-vehicle/new" replace />;
  }
  return (
    <div className="space-y-5">
      <div className="flex justify-between item-center bg-white rounded-lg p-4">
        <h1 className="text-3xl font-bold my-5"> Ô tô mới</h1>
        <Link to="new">
          <Button variant="primary">Tạo mới</Button>
        </Link>
      </div>
      {drafts.map((draft) => (
        <DraftItem draft={draft} />
      ))}
    </div>
  );
}

export default VehicleCreateData;
