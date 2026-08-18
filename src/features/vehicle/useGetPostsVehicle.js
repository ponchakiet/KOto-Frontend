import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/PostService";

function useGetPostsVehicle(type) {
  const { isLoading, data } = useQuery({
    queryKey: ["posts", type],
    queryFn: () => getPosts(0, 4, type),
  });

  const {
    content = [],
    pageNumber = 0,
    pageSize = 4,
    totalElements = 0,
    totalPages = 0,
    last = true,
  } = data ?? {};

  return {
    isLoading,
    content,
    pageNumber,
    pageSize,
    totalElements,
    totalPages,
    last,
  };
}

export default useGetPostsVehicle;
