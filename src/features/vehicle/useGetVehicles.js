import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getVehicles } from "../../services/VehicleService";

function useGetVehicles() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page"))
    : 0;
  const { isLoading, data } = useQuery({
    queryKey: ["vehicles", page],
    queryFn: () => getVehicles({ page }),
    retry: 0,
  });
  const {
    content: vehicles = [],
    size = 4,
    totalElements = 0,
    totalPages = 0,
  } = data ?? {};
  if (page + 1 < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["vehicles", page + 1],
      queryFn: () => getVehicles({ page: page + 1 }),
    });
  }

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["vehicles", page - 1],
      queryFn: () => getVehicles({ page: page - 1 }),
    });

  return { isLoading, vehicles, page, size, totalElements, totalPages };
}

export default useGetVehicles;
