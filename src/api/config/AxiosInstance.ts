import axios from "axios";

const DEFAULT_ACCEPT_TYPE = "application/json" as const;
const BASE_URL = import.meta.env.VITE_BACKEND_URL;



const axiosInstance = axios.create();
axiosInstance.interceptors.request.clear();
axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.headers["Content-Type"] = DEFAULT_ACCEPT_TYPE;

axiosInstance.interceptors.request.use(
  (config) => {

    config.timeout = 60000;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.clear();
axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response?.status === 403) {
      console.log("토큰 error");
    } else if (error.response?.status === 401) {
      return Promise.reject(error.response.data.error);
    } else if (error.response?.status === 404) {
      return Promise.reject(error.response.data.error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
