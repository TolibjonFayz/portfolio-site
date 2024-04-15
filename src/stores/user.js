import { defineStore } from "pinia";
import user from "../api/apiUser";

export const useUserStore = defineStore({
  id: "user",
  actions: {
    async sendMessageToUser(payload) {
      try {
        return await user.sendMessageToAdmin(payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
