<script setup lang="ts">

import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useQuery } from "@tanstack/vue-query";
import { fetchPost } from '@/services/posts_service/posts_service';

const routeStore = useRoute();

const postPath = computed(() => {
  return (routeStore.params['postPath'] as string[]).join('/');
});

const queryResult = useQuery({
  queryKey: ['get_post', postPath],
  queryFn: ({queryKey}) => {
    return fetchPost(queryKey[1]);
  }
});

</script>

<template>
  <v-container>
    <template v-if="queryResult.isSuccess">
      <article :class="styles['post']" v-html="queryResult.data.value"></article>
    </template>
  </v-container>
</template>

<style module="styles" lang="scss">
.post{
  text-align: justify;

  p {
    padding: 0.2em 0px;
  }

  li {
    margin-left: 20px;
  }

  h2, h3, h4, h5, h6 {
    padding: 0.5em 0px 0px 0px;
  }
}
</style>
