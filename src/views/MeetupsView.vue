<script setup>
import { useMeetupStore } from "../stores/meetup";
import { formatDate } from "../lib/date";

const store = useMeetupStore();
const meetups = store.getLoadedMeetups;
</script>

<template>
  <v-container class="mt-8">
    <v-row justify="center" v-for="meetup in meetups" :key="meetup.id">
      <v-col cols="12" md="8">
        <v-card class="bg-info">
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="5" md="4">
                <v-img :src="meetup.imageUrl"></v-img>
              </v-col>
              <v-col>
                <v-card-title>
                  <h2>{{ meetup.title }}</h2>
                  <div>{{ formatDate(meetup.date) }}</div>
                </v-card-title>
                <v-card-actions>
                  <v-btn class="bg-white" :to="`/meetups/${meetup.id}`">
                    <v-icon icon="mdi-arrow-right" />
                    View Meetup</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
