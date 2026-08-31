import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVehicle as deleteVehicleAPI } from "../../services/VehicleService";

function useDeleteVehicle() {
  const queryClient = useQueryClient();
  const { isPending, mutate: deleteVehicle } = useMutation({
    mutationFn: ({ id }) => deleteVehicleAPI(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["vehicles"],
        exact: false,
      });
      queryClient.invalidateQueries({
        queryKey: ["vehicles", data.id],
        exact: false,
      });
    },
  });

  return { isPending, deleteVehicle };
}

export default useDeleteVehicle;
