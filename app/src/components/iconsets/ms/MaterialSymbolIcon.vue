<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  tag: string;
  icon?: any;
  disabled?: Boolean;
}

const props = defineProps<Props>();

const [icon, shape] = ((props.icon as string) || 'emoticon rounded').trim().split(' ');
</script>

<template>
  <span :class="`material-symbols-${shape || 'rounded'}`">
    {{ icon }}
  </span>
</template>
