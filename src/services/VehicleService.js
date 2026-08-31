import { API, AUTH_REQUEST } from "../utils/axiosConfig";

export async function getAllCategories() {
  const res = await API.get(`/vehicle-service/api/v1/public/categories`);
  return res.data.data;
}

export async function getVehicle(vehicleId) {
  const res = await API.get(`/vehicle-service/api/v1/vehicles/${vehicleId}`);
  return res.data.data;
}

export async function getVehicles({ page, size }) {
  const res = await AUTH_REQUEST.get(`/vehicle-service/api/v1/vehicles`, {
    params: { page, size },
  });
  return res.data.data;
}

export async function getVehiclesDraft() {
  const res = await AUTH_REQUEST.get(`/asset-service/api/v1/vehicles/draft`);
  return res.data.data;
}

export async function uploadVehicleImage(vehicleId, file) {
  const formData = new FormData();
  formData.append("file", file);
  if (vehicleId) formData.append("vehicleId", vehicleId);

  const res = await API.post(
    `/vehicle-service/api/v1/vehicles/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return res.data.data;
}

export async function deleteVehicle(id) {
  const res = await AUTH_REQUEST.delete(
    `/vehicle-service/api/v1/vehicles/${id}`,
  );
  return res.data.data;
}

export async function creatVehicle(request) {
  const res = await AUTH_REQUEST.post(
    `/vehicle-service/api/v1/vehicles`,
    request,
  );

  return res.data.data;
}
