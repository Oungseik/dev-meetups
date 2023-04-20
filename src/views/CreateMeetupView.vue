<script setup>
import { useCreateMeetupStore } from "../stores/createMeetup";
import { useMeetupStore } from "../stores/meetup";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

/**
* use to validate the `v-text-field` tag
 * @param {string} value
 * @return {string | boolean}
 */
function required(value) {
  return !!value || "Field is required";
}
const store = useCreateMeetupStore();
const meetupStore = useMeetupStore();

const onCreateMeetup = () => {
  meetupStore.addMeetup({
    title: store.title,
    location: store.location,
    imageUrl: store.imageUrl,
    description: store.description,
    date: new Date(store.date).setHours(store.time.hours, store.time.minutes),
  });
};
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <h2 class="text-primary ttl">Create a new Meetup</h2>
      </v-col>
    </v-row>
    <form @submit.prevent="onCreateMeetup">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-text-field
            type="text"
            name="title"
            label="Title"
            id="title"
            v-model="store.title"
            :rules="[required]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-text-field
            type="text"
            name="location"
            label="Location"
            id="location"
            v-model="store.location"
            :rules="[required]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-text-field
            type="text"
            name="imageUrl"
            label="Image URL"
            id="imageUrl"
            v-model="store.imageUrl"
            :rules="[required]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-img :src="store.imageUrl"></v-img>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-textarea
            type="textarea"
            name="description"
            label="Description"
            id="description"
            v-model="store.description"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-text-field
            type="date"
            name="date"
            label="Date"
            id="date"
            v-model="store.date"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6" class="time">
          <VueDatePicker v-model="store.time" time-picker />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-btn class="bg-primary" type="submit" :disabled="!store.formIsValid"
            >create meetup</v-btn
          >
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<style scoped>
.ttl {
  font-size: 2.8rem;
  font-weight: normal;
}
</style>
