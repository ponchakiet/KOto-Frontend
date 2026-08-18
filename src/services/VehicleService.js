import { API } from "../utils/axiosConfig";

export async function getAllCategories() {
  const res = await API.get(`/vehicle-service/api/v1/categories`);
  return res.data.data;
}
