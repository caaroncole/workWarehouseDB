<script setup>
import MainMenu from './components/MainMenu.vue'


</script>

<template>
  <nav>
    <MainMenu/>
  </nav>
  <actions>
    <ActionsMenu/>
  </actions>
  <main>
    
    <router-view />
   
  </main>
  <msg>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
  </msg>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   background-color: #4e4c4c;
  color: rgb(194, 93, 93);
  margin-top: 5px;

a {
  color: rgb(194, 93, 93);
  text-decoration: none;
  cursor: pointer;
}
}

.nav {
  display: flex;
  gap: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
}



</style>
