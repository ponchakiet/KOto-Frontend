import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getVehicle } from "../../services/VehicleService";

function useGetVehicle() {
  const { vehicleId } = useParams();
  const { isLoading, data: vehicle } = useQuery({
    queryKey: ["vehicle", vehicleId],
    queryFn: () => getVehicle(vehicleId),
  });

  return { isLoading, vehicle };
}

export default useGetVehicle;
