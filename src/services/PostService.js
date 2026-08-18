import { API } from "../utils/axiosConfig";

export async function getPosts(page, size, type) {
  const res = await API.get("/post-service/api/v1/posts", {
    params: { page, size, type },
  });
  return res.data.data;
}

export async function getPostById(postId) {
  const res = await API.get(`/post-service/api/v1/posts/${postId}`);
  return res.data.data;
}
