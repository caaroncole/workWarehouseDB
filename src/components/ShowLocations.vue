<script setup>
import { ref, onMounted } from 'vue';
import { fetchLocations } from './FetchLocations'
const locations = ref([])

const getLocations = async() =>  {
  const fetchedLocations = await fetchLocations()
  locations.value = fetchedLocations
}
onMounted(() => {
  getLocations()
})
</script>

<template>
  <div class="ShowLocations">
    <div class="header">
      <h1>ShowLocations</h1>
      <input type="text" placeholder="Search">
    </div>
    <div class="content">
      <router-link :to="`/locations/${location._id}`" :key="location._id" v-for="location in locations">{{ location.locationName }}</router-link>
    </div>  
  </div>
</template>

<style scoped>
.ShowLocations {
  font-size: 20px;
  align-items: left;
}
.header {
  align-items: left;
}
.content {
  display: flex;
  flex-direction: column;
  padding: 5px;
  padding-left: 10px;
  align-items: flex-start;
}
</style>