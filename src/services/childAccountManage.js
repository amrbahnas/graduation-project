import apiClient from "./api-client";

class ChildAccountManage {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  updateInfo = (body) => apiClient.post(this.endpoint, body);
  deleteAccount = () => apiClient.post(this.endpoint);
}

export default ChildAccountManage;
