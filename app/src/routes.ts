import { RouteRecordRaw } from 'vue-router';

export const routeNames = Object.freeze({
  root: 'root',
  notFound: 'not-found',
  posts: 'posts',
} satisfies IfRecord);

export const routes: RouteRecordRaw[] = [
  {
    name: routeNames.root,
    path: '/',
    component: () => import('@/layouts/default_layout/DefaultLayout.vue'),
    children: [
      {
        name: routeNames.posts,
        path: '/posts/:postPath([a-z0-9_-]*)*',
        component: () => import('@/pages/posts_page/PostsPage.vue'),
      },
      {
        name: routeNames.notFound,
        path: '/:matchedPath(.*)*',
        component: () => import('@/pages/not_found_page/NotFoundPage.vue'),
      },
    ],
  },
];