// @ts-check

import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore("user", () => {
  const user = ref({
    id: "a977244a-e882-4a86-ab0f-3d048b97f35e",
    registeredMeetups: ["meetup-1"],
  });

  const setUser = (userData) => {
    user.value = userData;
  };

  return { user, setUser };
});
