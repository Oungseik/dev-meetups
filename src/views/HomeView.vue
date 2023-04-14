<script setup>
import { useRouter } from "vue-router";
import { useMeetupStore } from "../stores/meetup";

const router = useRouter();
const store = useMeetupStore();
const meetups = store.loadedMeetups;

function onLoadMeetup(id) {
  router.push(`/meetups/${id}`);
}
</script>

<template>
  <v-container>
    <v-row justify="center" class="mb-2 mt-4">
      <v-col cols="auto">
        <v-btn to="/meetups" size="large" class="bg-blue">Explore Meetups</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn to="/meetup/new" size="large" class="bg-blue">Organize Meetup</v-btn>
      </v-col>
    </v-row>
    <v-row class="mb-2">
      <v-carousel>
        <v-carousel-item
          class="cursor-pointer"
          v-for="meetup in meetups"
          :key="meetup.id"
          :src="meetup.imageUrl"
          cover
          @click="() => onLoadMeetup(meetup.id)"
        >
          <div class="title">{{ meetup.title }}</div>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">Join our awesome meetups!</v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 1.5rem;
  padding: 20px;
}
</style>

<style>
.v-btn--active .mdi-circle::before {
  color: #fff;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
