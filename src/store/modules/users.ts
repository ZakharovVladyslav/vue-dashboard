export default {
   state: () => ({
      users: [
         {
            id: 1,
            name: 'John Doe',
            age: 13,
         },
      ],
   }),
   actions: {
      addUser: ({ commit }: any, user: any) => {
         commit('addUser', user);
      },
   },
   mutations: {
      addUser: (state: any, user: any) => {
         state.users.push(user);
      },
   },

   getters: {
      getAdults: (state: any) => {
         return state.users.filter((user: any) => user.age >= 18);
      },
   },
};
