import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadVehicleImage } from "../../services/VehicleService";

function useUploadMedia() {
  const queryClient = useQueryClient();
  const { isPending, mutate: uploadMedia } = useMutation({
    mutationFn: ({ vehicleId, file }) => uploadVehicleImage(vehicleId, file),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["vehicle", data.vehicleId],
      });
    },
  });

  return { isPending, uploadMedia };
}

export default useUploadMedia;
