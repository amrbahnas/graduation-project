import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_SERVER_DOMAIL,
  headers: {
    "Content-Type": "application/json",
  },
});

class ApiClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  get = () =>
    axiosInstance.get(this.endpoint).then((response) => response.data);

  post = (body) =>
    axiosInstance.post(this.endpoint, body).then((response) => response.data);

  patch = (body) =>
    axiosInstance.patch(this.endpoint, body).then((response) => response.data);

  delete = (body) =>
    axiosInstance.delete(this.endpoint, body).then((response) => response.data);

  updateInfo = (body) =>
    axiosInstance.post(this.endpoint, body).then((res) => res.data);

  deleteAccount = () =>
    axiosInstance.post(this.endpoint).then((res) => res.data);
}

export default ApiClient;
