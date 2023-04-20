// @ts-check
import { createApp } from "vue";
import { createPinia } from "pinia";

// @ts-ignore
import App from "./App.vue";
import router from "./router";
import "./firerbase";

import "./assets/main.css";
// import "iconify-icon";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa";

// @ts-ignore
import colors from "vuetify/lib/util/colors";

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.red.darken2,
          secondary: colors.red.lighten4,
          info: colors.blue.darken1,
        },
      },
    },
  },
});

const app = createApp(App);

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
