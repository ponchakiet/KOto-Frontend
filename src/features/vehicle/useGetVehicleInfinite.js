import { useInfiniteQuery } from "@tanstack/react-query";
import { getVehicles } from "../../services/VehicleService";

function useGetVehicleInfinite() {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["vehicles"],
      queryFn: ({ pageParam = 0 }) => getVehicles({ page: pageParam }),
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.page + 1;
        return !lastPage.last ? nextPage : undefined;
      },
      staleTime: 1000 * 60,
    });
  const vehicles = data?.pages.flatMap((page) => page.content) ?? [];
  const totalElements = data?.pages[0]?.totalElements ?? 0;

  return {
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasMore: hasNextPage,
    assets,
    totalElements,
  };
}

export default useGetVehicleInfinite;
