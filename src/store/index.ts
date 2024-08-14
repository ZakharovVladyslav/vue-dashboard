import { createStore } from 'vuex';
import { users } from './modules';

export const store = createStore({
   modules: {
      users,
   },
});
