<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="bg-info">
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="5" md="4">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
              </v-col>
              <v-col>
                <v-card-title>
                  <h2>My Meetup</h2>
                  <div>14th April 2023</div>
                </v-card-title>
                <v-card-actions>
                  <v-btn class="bg-white" to="/meetups/1">
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
