import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.min.css'

import { createVuetify } from 'vuetify';
import { md3 } from 'vuetify/blueprints/md3';
import { md } from "vuetify/iconsets/md";
import { ms } from '@/components/iconsets/ms';
// import { RouterLink, RouterView } from 'vue-router';


const vuetifyPlugin = createVuetify({
  blueprint: md3,
  icons: {
    defaultSet: 'md',
    sets: {
      md,
      ms,
    },
  },
  theme: {
    defaultTheme: 'light'
  },
  aliases: {
    // RouterView,
    // RouterLink,
  }
});

export { vuetifyPlugin };
