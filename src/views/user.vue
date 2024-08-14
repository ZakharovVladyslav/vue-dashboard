<script setup>
import Header from '@/components/interface/header.vue';
import Button from '@/components/ui/button.vue';

import { defineProps, ref, computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
   id: String,
});

const store = useStore();

const adults = computed(() => store.getters.getAdults);

const userName = ref('');
const userAge = ref('');

const handleAddUser = () => {
   const newUser = {
      name: userName.value,
      age: userAge.value,
      id: Math.random() % 10,
   };

   store.dispatch('addUser', newUser);
   userName.value = '';
   userAge.value = '';
};
</script>

<template>
   <Header />

   <div>User ID: {{ id }}</div>

   <section :class="[$style.userInputWrapper]">
      <input type="text" v-model="userName" />
      <input type="number" v-model="userAge" />
   </section>

   <Button @click="handleAddUser">Add user</Button>

   <section v-for="user in adults">
      <div key="user.id">
         {{ user?.name || 'name placeholder' }}
         -
         {{ user?.age || 'age placeholder' }}
      </div>
   </section>

   <router-view />
</template>

<style lang="scss" module>
.userInputWrapper {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 8px;
}
</style>
