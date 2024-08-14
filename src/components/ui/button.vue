<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['click']);

const handleClick = () => {
   emit('click');
};
</script>

<template>
   <button :class="[$style.button]" @click="handleClick">
      <slot />
   </button>
</template>

<style lang="scss" module>
.button {
   background-color: transparent;

   border-radius: 4px;
   border: none;

   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

   cursor: pointer;
}
</style>
