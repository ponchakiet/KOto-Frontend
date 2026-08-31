import { useQuery } from "@tanstack/react-query";
import { getVehiclesDraft } from "../../services/VehicleService";

function useGetAssetDraft() {
  const { isLoading, data: drafts } = useQuery({
    queryKey: ["draft"],
    queryFn: () => getVehiclesDraft(),
    staleTime: 0,
  });

  return { isLoading, drafts };
}

export default useGetAssetDraft;
