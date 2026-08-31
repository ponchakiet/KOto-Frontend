import { Link, useSearchParams } from "react-router-dom";
import useGetVehicles from "./useGetVehicles";
import MiniSpinner from "../../ui/MiniSpinner";
import PostCreatedEmpty from "../post/PostCreatedEmpty";
import Button from "../../ui/Button";
import VehicleItem from "./VehicleItem";
import PaginationStack from "../../ui/PaginationStack";

function VehicleList() {
  const { isLoading, vehicles, totalPages, page } = useGetVehicles();

  const [searchParams, setSerachParams] = useSearchParams();
  function handleOnClickPagniation(e, v) {
    searchParams.set("page", v - 1);
    setSerachParams(searchParams);
  }
  if (isLoading) return <MiniSpinner />;

  if (!vehicles.length)
    return (
      <div className="w-full bg-white  px-4 py-8 space-y-6">
        <PostCreatedEmpty />
      </div>
    );
  return (
    <div className="w-full bg-white  px-4 py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Ô tô của tôi</h1>
        <Link to="/create-vehicle">
          <Button>Tạo ô tô mới</Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 space-y-6 space-x-3 justify-center">
        {vehicles.map((vehicle) => (
          <Link to={`/vehicle/${vehicle.id}`} key={vehicle.id}>
            <VehicleItem vehicle={vehicle} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center text-3xl">
        <PaginationStack
          totalPage={totalPages}
          currentPage={page}
          onClick={handleOnClickPagniation}
        />
      </div>
    </div>
  );
}

export default VehicleList;
