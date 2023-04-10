<script setup>
import { RouterLink } from "vue-router";

const navItems = [
  {
    title: "View Meetups",
    to: "",
    icon: "heroicons:users-solid",
  },
  {
    title: "Organize Meetup",
    to: "",
    icon: "ic:sharp-location-on",
  },
  {
    title: "Profile",
    to: "",
    icon: "mdi:user",
  },
  {
    title: "Sign up",
    to: "",
    icon: "mdi:face-man-profile",
  },
  {
    title: "Sign in",
    to: "",
    icon: "ic:baseline-lock-open",
  },
];
</script>

<template>
  <header class="px-2 bg-red-700 shadow-md shadow-red-700 text-gray-100">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="text-2xl">DevMeetup</h1>

      <nav class="uppercase flex">
        <RouterLink
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          class="transition p-2 md:p-4 hover:text-gray-200 hover:bg-gray-600 flex items-center justify-center gap-x-2"
        >
          <iconify-icon :icon="item.icon" class="text-xl"></iconify-icon>
          {{ item.title }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
