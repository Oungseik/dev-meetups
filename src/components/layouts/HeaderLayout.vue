<script setup>
import { RouterLink } from "vue-router";
import SideNavLayout from "./SideNavLayout.vue";

import { ref } from "vue";

const drawer = ref(false);

const navItems = [
  {
    title: "View Meetups",
    to: "/meetups",
    icon: "mdi-account-supervisor",
  },
  {
    title: "Organize Meetup",
    to: "/meetup/new",
    icon: "ic:sharp-location-on",
  },
  {
    title: "Profile",
    to: "/profile",
    icon: "mdi:user",
  },
  {
    title: "Sign up",
    to: "/signup",
    icon: "mdi:face-man-profile",
  },
  {
    title: "Sign in",
    to: "/signin",
    icon: "ic:baseline-lock-open",
  },
];
</script>

<template>
  <v-toolbar elevation="4">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title>DevMeetup</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-for="item in navItems" :key="item.title">
        <v-icon :icon="item.icon" start />
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-navigation-drawer v-model="drawer" temporary></v-navigation-drawer>
</template>
