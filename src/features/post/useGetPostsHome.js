import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/PostService";

function useGetPostsHome(type) {
  const { isLoading, data } = useQuery({
    queryKey: ["posts", type], // include `type` to avoid cache collision
    queryFn: () => getPosts(0, 5, type),
  });

  const {
    content = [],
    page = 0,
    size = 4,
    totalElements = 0,
    totalPages = 0,
    last = true,
  } = data ?? {};

  console.log(data);

  return { isLoading, content, page, size, totalElements, totalPages, last };
}

export default useGetPostsHome;
