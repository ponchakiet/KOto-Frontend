import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../services/VehicleService";

function useGetCategories() {
  const { isLoading, data: categories } = useQuery({
    queryKey: ["catogries"],
    queryFn: () => getAllCategories(),
  });

  return { isLoading, categories };
}

export default useGetCategories;
