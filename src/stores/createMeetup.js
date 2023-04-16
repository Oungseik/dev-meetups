import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCreateMeetupStore = defineStore("createMeetup", () => {
  const title = ref();
  const location = ref();
  const imageUrl = ref();
  const description = ref();
  const date = ref();
  const time = ref({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
  });
  const formIsValid = computed(
    () =>
      title.value &&
      location.value &&
      imageUrl.value &&
      description.value &&
      date.value &&
      time.value
  );

  return { title, location, imageUrl, description, date, time, formIsValid };
});
