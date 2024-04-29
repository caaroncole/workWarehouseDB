<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const part = ref({})

onMounted(() => {
  getPart()
})

const getPart = async() => {
  const fetchedPart = await fetch(`/location/${route.params.id}`)
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
    </div>
  </div>
</template>

<style scoped>
</style>