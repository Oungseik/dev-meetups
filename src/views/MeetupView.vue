<script setup>
import { useMeetupStore } from "../stores/meetup";
import { useRoute } from "vue-router";
import { formatDate } from "../lib/date";

const store = useMeetupStore();
const id = useRoute().params.id;
const meetup = store.getLoadedMeetup(id);
const dateOptions = { year: "numeric", month: "long", day: "numeric" };
</script>

<template>
  <v-container class="mt-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="8">
          <v-card-title tag="h3" class="text-primary my-4">{{ meetup.title }}</v-card-title>
          <v-img :src="meetup.imageUrl" aspect-ratio="2.5" cover></v-img>
          <v-card-text class="mt-4">
            <h3 class="text-info mb-2">{{ formatDate(meetup.date) }} - {{ meetup.location }}</h3>
            <div>
              {{ meetup.description }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn elevation="2" class="bg-primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
