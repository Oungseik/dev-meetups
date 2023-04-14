import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMeetupStore = defineStore("meetup", () => {
  const loadedMeetups = ref([
    {
      imageUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      id: "796a5970-8a1c-4cc2-8f53-4f36ec74f5af",
      title: "Meetup in New York",
      date: "2023-05-14",
    },
    {
      imageUrl: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
      id: "96d43f6d-ade7-4f9f-9b5d-f9b00b407f5c",
      title: "Meetup in Paris",
      date: "2023-04-14",
    },
    {
      imageUrl: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      id: "ed442b0b-0951-450f-934e-085cf44ef25d",
      title: "Meetup in Moroco",
      date: "2023-03-14",
    },
  ]);

  const user = ref({
    id: "a977244a-e882-4a86-ab0f-3d048b97f35e",
    registeredMeetups: ["meetup-1"],
  });

  const getLoadedMeetups = computed(() => loadedMeetups.value.sort((a, b) => a.date > b.date));
  const getLoadedMeetup = (id) => computed(() => loadedMeetups.find((meetup) => meetup.id === id));
  const featuredMeetups = computed(() => loadedMeetups.value.slice(0, 5));

  return { loadedMeetups, user, getLoadedMeetups, featuredMeetups, getLoadedMeetup };
});
