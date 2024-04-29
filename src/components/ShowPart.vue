<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const part = ref({})

onMounted(() => {
  getPart()
})

const getPart = async() => {
  const fetchedPart = await fetch(`/part/${route.params.id}`)
  part.value = await fetchedPart.json()
}

</script>

<template>
  <div class="ShowPart">
    <div class="header">
      <h1>ShowPart</h1>
    </div>
    <div class="content">
      <p v-for="(value, attr) in part" :key="attr">{{ attr }}: {{ value }}</p>
      <p>Locations:</p>
      
    </div>
  </div>
</template>

<style scoped>
.ShowPart {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
}
.header {
  display: flex;

  align-items: flex-start;
  
}
.content {
  display: flex;
  flex-direction: column;
  padding: 5px;
  padding-left: 10px;
  align-items: flex-start;
}
</style>