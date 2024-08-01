<script setup lang="ts">
import { ref } from 'vue';
import { TButtonProps } from '@/types';

const { onClick } = defineProps<TButtonProps>();

const cButton = ref('button');
</script>

<template>
   <button :class="[$style.button]" @click="onClick">
      <slot />
   </button>
</template>

<style lang="scss" module>
.button {
   background-color: transparent;

   border-radius: 4px;
   border: none;

   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}
</style>
