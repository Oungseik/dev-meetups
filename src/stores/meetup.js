// @ ts-check
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMeetupStore = defineStore("meetup", () => {
  const loadedMeetups = ref([
    {
      imageUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      id: "796a5970-8a1c-4cc2-8f53-4f36ec74f5af",
      title: "Meetup in New York",
      date: new Date(),
      location: "New York",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem velit aut odio veniam perferendis blanditiis dolore sunt voluptates? Deserunt illo fugit maiores, porro illum debitis suscipit dolorem quam totam accusantium?",
    },
    {
      imageUrl: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
      id: "96d43f6d-ade7-4f9f-9b5d-f9b00b407f5c",
      title: "Meetup in Paris",
      date: new Date(),
      location: "Paris",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem velit aut odio veniam perferendis blanditiis dolore sunt voluptates? Deserunt illo fugit maiores, porro illum debitis suscipit dolorem quam totam accusantium?",
    },
    {
      imageUrl: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      id: "ed442b0b-0951-450f-934e-085cf44ef25d",
      title: "Meetup in Moroco",
      date: new Date(),
      location: "Moroco",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem velit aut odio veniam perferendis blanditiis dolore sunt voluptates? Deserunt illo fugit maiores, porro illum debitis suscipit dolorem quam totam accusantium?",
    },
  ]);

  const getLoadedMeetups = computed(() =>
    loadedMeetups.value.sort((a, b) => (a.date < b.date ? 1 : -1))
  );
  const featuredMeetups = computed(() => loadedMeetups.value.slice(0, 5));

  /**
   * @param {string} id
   * */
  function getLoadedMeetup(id) {
    return loadedMeetups.value.find((meetup) => meetup.id === id);
  }

  /**
   * @param {import("../types").Meetup} meetup
   * */
  function addMeetup(meetup) {
    loadedMeetups.value.push({ ...meetup, id: crypto.randomUUID() });
  }

  return { loadedMeetups, getLoadedMeetups, featuredMeetups, getLoadedMeetup, addMeetup };
});
