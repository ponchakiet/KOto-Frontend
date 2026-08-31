import { API } from "../utils/axiosConfig";

export async function getPosts(page, size, type) {
  const res = await API.get("/post-service/api/v1/public/posts", {
    params: { page, size, type },
  });
  return res.data.data;
}

export async function getPostById(postId) {
  const res = await API.get(`/post-service/api/v1/public/posts/${postId}`);
  return res.data.data;
}

export async function getHistory({ id, page, size }) {
    const res = await AUTH_REQUEST.get(`/post-service/api/v1/posts/history/${id}`, {
        params: { page, size }
    })
    return res.data.data;
}

export async function getComments({ postId, page, size }) {
  const res = await API.get(
    `/post-service/api/v1/public/posts/${postId}/comments`,
    {
      params: { page, size },
    },
  );
  return res.data.data;
}

export async function createComment({ postId, content }) {
  const res = await AUTH_REQUEST.post(
    `/post-service/api/v1/posts/${postId}/comment`,
    {
      content,
    },
  );
  return res.data.data;
}
