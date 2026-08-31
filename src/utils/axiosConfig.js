import axios from "axios";

import { BASE_URL } from "./Url";
// import { getAccessToken, setLocalStorageToken } from "./helper";
// import { refreshToken } from "../services/AuthService";

let retryQueue = [];
let isRefresh = false;

export const API = axios.create({
  baseURL: BASE_URL,
});

export const ADDRESS_API = axios.create({
  baseURL: "https://tinhthanhpho.com/api/v1/",
});

export const AUTH_REQUEST = axios.create({
  baseURL: BASE_URL,
});
