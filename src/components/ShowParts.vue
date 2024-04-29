<script setup>
import { ref, onMounted } from 'vue';
import { fetchParts } from './FetchParts'
const parts = ref([])
const getParts = async() =>  {
const fetchedParts = await fetchParts()
parts.value = fetchedParts
}
onMounted(() => {
  getParts()
})

</script>

<template>
  <div class="ShowParts">
    <div class="header">
      <h1>ShowParts</h1>
      <input type="text" placeholder="Search">
    </div>
    <div class="content">
      <input v-for="part in parts" :key="part._id" type="checkbox" :id="part._id" :value="part._id" v-model="checked">
      <label for="checkbox">{{ part.partName }}</label>
    </div>  
  </div>
</template>

<style scoped>
.ShowParts {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  align-items: flex-start;
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
input {
  justify-content: space-between;
}
</style>