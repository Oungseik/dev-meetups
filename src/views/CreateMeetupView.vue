<script setup>
import { useCreateMeetupStore } from "../stores/createMeetup";
import { useMeetupStore } from "../stores/meetup";
import TimePicker from "../components/TimePicker.vue";

const required = (value) => !!value || "Field is required";
const store = useCreateMeetupStore();
const meetupStore = useMeetupStore();

const onCreateMeetup = () => {
  meetupStore.addMeetup({
    title: store.title,
    location: store.location,
    imageUrl: store.imageUrl,
    description: store.description,
    date: store.date,
    time: store.time,
  });
};

const handleTimeChange = (e) => {
  store.time = e.time;
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
        <v-col cols="12" md="6">
          <TimePicker @change="handleTimeChange" />
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

.time {
  background-color: #f6f6f6;
  min-height: 58px;
  position: relative;
  padding: 26px 16px 6px;
}

.time label {
  position: absolute;
  top: 7px;
  --v-field-label-scale: 0.75rem;
  font-size: var(--v-field-label-scale);
  opacity: var(--v-medium-emphasis-opacity);
}
</style>
