<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

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
    icon: "mdi-map-marker",
  },
  {
    title: "Profile",
    to: "/profile",
    icon: "mdi-account",
  },
  {
    title: "Sign up",
    to: "/signup",
    icon: "mdi-face-man",
  },
  {
    title: "Sign in",
    to: "/signin",
    icon: "mdi-lock-open",
  },
];
</script>

<template>
  <v-navigation-drawer v-model="drawer" temporary class="header">
    <v-list>
      <v-list-item v-for="item in navItems" :key="item.title" :value="item.title" :to="item.to">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar elevation="4" theme="dark" class="header">
    <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer" />
    <v-toolbar-title><RouterLink to="/">DevMeetup</RouterLink></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs">
      <v-btn v-for="item in navItems" :key="item.title" :to="item.to">
        <v-icon size="28" :icon="item.icon" start />
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style scoped>
.header a {
  text-decoration: none;
  color: inherit;
}
</style>
