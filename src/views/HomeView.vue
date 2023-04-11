<script setup>
const meetups = [
  {
    imageUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    id: crypto.randomUUID(),
    title: "Meetup in New York",
  },
  {
    imageUrl: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
    id: crypto.randomUUID(),
    title: "Meetup in Paris",
  },
  {
    imageUrl: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    id: crypto.randomUUID(),
    title: "Meetup in Moroco",
  },
];
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
        <v-carousel-item v-for="meetup in meetups" :key="meetup.id" :src="meetup.imageUrl" cover>
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
</style>
