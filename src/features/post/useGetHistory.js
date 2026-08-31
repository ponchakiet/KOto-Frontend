import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getHistory } from "../../services/PostService";

function useGetHistory() {
  const { vehicleId } = useParams();
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page"))
    : 0;
  const { isLoading, data } = useQuery({
    queryKey: ["history", vehicleId, page],
    queryFn: () => getHistory({ id: vehicleId, page }),
  });
  const {
    content: histories = [],
    size,
    totalElements,
    totalPages,
    last,
  } = data ?? {};
  if (page + 1 < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["history", vehicleId, page + 1],
      queryFn: () => getHistory({ id: vehicleId, page: page + 1 }),
    });
  }

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["history", vehicleId, page - 1],
      queryFn: () => getHistory({ id: vehicleId, page: page - 1 }),
    });

  return {
    isLoading,
    histories,
    page,
    size,
    totalElements,
    totalPages,
    last,
  };
}

export default useGetHistory;
