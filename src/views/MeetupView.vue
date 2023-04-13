<script setup></script>
<template>
  <v-container class="mt-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="8">
          <v-card-title tag="h3" class="text-primary my-4">My Meetup</v-card-title>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            aspect-ratio="2.5"
            cover
          ></v-img>
          <v-card-text class="mt-4">
            <h3 class="text-info">14th April 2023 - Where it take place</h3>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam minus fugiat quos
              quam quia ipsa nobis aliquam suscipit quasi aspernatur nam vel dolorem distinctio, et
              voluptate facere optio. Est, alias!
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
