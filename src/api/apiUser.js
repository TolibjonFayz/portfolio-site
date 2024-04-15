import axiosClient from "./apiClient";

const user = {
  sendMessageToAdmin(payload) {
    const url = "user/message";
    return axiosClient.post(url, payload);
  },
};

export default user;
