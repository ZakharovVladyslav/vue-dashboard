<template>
   <header>
      <nav :class="[$style.nav]">
         <router-link to="/">Home</router-link>
         <router-link to="/about">About</router-link>
         <router-link to="/user/1">Go to user 1</router-link>
      </nav>

      <router-view />
   </header>
</template>

<style lang="scss" module>
.nav {
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 16px;
}
</style>
