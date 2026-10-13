import { API, AUTH_REQUEST } from "../utils/axiosConfig";

export async function getUSerProfile() {
  const res = await AUTH_REQUEST.get(`/user-service/api/v1/users/profile`);
  return res.data.data;
}

export async function updateProfile({
  firstName,
  lastName,
  email,
  description,
  phoneNumber,
  taxCode,
  cid,
  dob,
  sex,
}) {
  const res = await AUTH_REQUEST.put(`/user-service/api/v1/users`, {
    firstName,
    lastName,
    email,
    description,
    phoneNumber,
    taxCode,
    cid,
    dob,
    sex,
  });
  return res.data.data;
}

export async function uploadMedia({ file, type }) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("type", type);
  const res = await AUTH_REQUEST.post(
    `/user-service/api/v1/users/upload-media`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return res.data.data;
}

export async function getUserInfo() {
  const res = await AUTH_REQUEST.get(`/user-service/api/v1/user`);
  return res.data.data;
}

export async function followUser({ followerId }) {
  const res = await AUTH_REQUEST.post(
    `/user-service/api/v1/users/follow/${followerId}`,
  );
  return res.data;
}

export async function unfollower({ followerId }) {
  const res = await AUTH_REQUEST.delete(
    `/user-service/api/v1/users/unfollow/${followerId}`,
  );
  return res.data;
}

export async function checkFollow({ followerId }) {
  const res = await AUTH_REQUEST.get(
    `/user-service/api/v1/users/follow/${followerId}`,
  );
  return res.data;
}

export async function signUp({
  username,
  lastName,
  firstName,
  email,
  password,
}) {
  const res = await API.post(`/user-service/api/v1/users/sign-up`, {
    username,
    lastName,
    firstName,
    email,
    password,
  });
  return res.data.data;
}

export async function getUserLadingPage({ userId }) {
  const res = await API.get(`/user-service/api/v1/public/users/page/${userId}`);
  return res.data.data;
}
