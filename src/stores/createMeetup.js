import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCreateMeetupStore = defineStore("createMeetup", () => {
  const title = ref();
  const location = ref();
  const imageUrl = ref();
  const description = ref();
  const formIsValid = computed(
    () => title.value && location.value && imageUrl.value && description.value
  );

  return { title, location, imageUrl, description, formIsValid };
});
