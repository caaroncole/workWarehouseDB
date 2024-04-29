<template>
  <div class="MainMenu">
    <div class="navMenu">
      <a v-for="(subMenus, menuItem) in menu" @click="setActiveMenu(menuItem)" :key="menuItem" :class="{active: activeMenu === menuItem}">{{ menuItem }}</a>
      <router-link to="/partForm">New Part</router-link>
    </div>
    <div class="subMenu">
      <router-link :to="`/${submenu}`" v-for="submenu in menu[activeMenu]" :key="submenu" @click="setActiveSubMenu(submenu)" :class="{activeSubMenu: activeSubMenu === submenu}">{{ submenu }}</router-link>
    </div>  
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menu = {
  Inventory: ["Parts", "Locations"],
  Production: ["Lines", "Orders"]
};

const activeMenu = ref('')
const activeSubMenu = ref('')

const setActiveMenu = (menuName) => {
  activeMenu.value = menuName === activeMenu.value ? '' : menuName
}

const setActiveSubMenu = (submenu) => {
  activeSubMenu.value = submenu === activeSubMenu.value ? '' : submenu
}
</script>

<style scoped>
.MainMenu {
  font-size: 20px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
}

.navMenu {
  display: flex;
  gap: 10px;
}

.router-link {
  color: white;
  text-decoration: none;
}

.subMenu {
  display: flex;
  gap: 10px;
  background-color: #4e4c4c;
}

.active {
  background-color: #2a2a2a;
  color: white;
  border-radius: 5px;
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
}

.active:hover {
  background-color: #2a2a2a;
  color: black;
  border-radius: 5px;
  padding: 5px;
}

.activeSubMenu {
  background-color: #2a2a2a;
  color: white;
  border-radius: 5px;
}
</style>
