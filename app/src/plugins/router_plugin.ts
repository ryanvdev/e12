import { routes } from '@/routes';
import _ from 'lodash';
import { createRouter, createWebHashHistory } from 'vue-router';



export const routerPlugin = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

// public/posts/apps/lich-vn/privacy-policy/content.md