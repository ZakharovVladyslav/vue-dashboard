<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { v7 } from 'uuid';

import { Button } from '@/components';

const todoTitle = ref('');
const todos = ref<TTodo[]>([
   {
      id: v7() as UUID,
      title: 'Learn Vue 3',
      completed: false,
   },
   {
      id: v7() as UUID,
      title: 'Learn Vite',
      completed: false,
   },
   {
      id: v7() as UUID,
      title: 'Build something awesome',
      completed: false,
   },
]);

const notCompletedTodos = computed(() => {
   return todos.value.filter(todo => !todo.completed);
});

watch(notCompletedTodos, () => {
   console.log({ notCompletedTodos: notCompletedTodos.value });
});

const appendTodo = () => {
   if (!todoTitle.value.trim()) return;

   const newTodo: TTodo = {
      id: v7() as UUID,
      title: todoTitle.value || '',
      completed: false,
   };

   todos.value.push(newTodo);

   todoTitle.value = '';
};

const handleRemoveTodo = (id: UUID) => {
   todos.value = todos.value.filter(todo => todo.id !== id);
};

// classes

const btnAdd = ref('btnAdd');
</script>

<template>
   <input type="text" v-model="todoTitle" />

   <ul>
      <li v-for="todo in notCompletedTodos" :key="todo.id">
         <input type="checkbox" v-model="todo.completed" />
         <span
            :class="{ completed: todo.completed }"
            :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }"
            >{{ todo.title }}

            <Button :onClick="() => handleRemoveTodo(todo.id)">X</Button>
         </span>
      </li>
   </ul>

   <Button :onClick="appendTodo">+</Button>
</template>

<style lang="scss">
@import './home.scss';
</style>
