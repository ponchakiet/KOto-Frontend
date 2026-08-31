import { useMutation, useQueryClient } from "@tanstack/react-query";
import { creatVehicle as createVehicleAPI } from "../../services/VehicleService";

function useCreateVehicle() {
  const queryClient = useQueryClient();
  const { isPending, mutate: createVehicle } = useMutation({
    mutationFn: ({ request }) => createVehicleAPI(request),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["vehicle"],
        exact: false,
      });
    },
  });

  return { isPending, createVehicle };
}

export default useCreateVehicle;
