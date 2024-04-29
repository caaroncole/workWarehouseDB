<script setup>
import { reactive } from 'vue';
  const formData = reactive({
    createdAt: new Date()
  })

const sumbitForm = async() => {
    const data = JSON.stringify(formData)
    const response = await fetch('/submitPart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
    const result = await response.json()
    console.log(result)
    
  }
</script>

<template>
  <div class="PartForm">
    <div class="header">
      <h1>PartForm</h1>
    </div>
    <div class="content">
      <form @submit.prevent>
      <label>Part Name: <input v-model="formData.partName" type="text" placeholder="PartName"></label>
      <label>Part Type: <select v-model="formData.partType" id="partType" value="partType">
        <option value="rawGood">Raw Good</option>
        <option value="finishedGood">Finished Good</option>
        <option value="supplies">Supplies</option>
        <option value="equipment">Equipment</option>
      </select></label>
      <label>Material: <select v-model="formData.material">
        <option value="psf">PSF</option>
        <option value="psf-Or">PSF-OR</option>
        <option value="fiberGlassBlue">Fiber Glass Blue</option>
        <option value="fiberGlassWhite">Fiber Glass White</option>
        <option value="foam">Foam</option>
        <option value="hogHair">Hog Hair</option>
      </select></label>
      <label>Unit Count: <input v-model="formData.unitCount" type="text" placeholder="UnitCount"></label>
      <label>Description: <input v-model="formData.description" type="text" placeholder="Description"></label>
      <label>Width: <input v-model="formData.width" type="text" placeholder="Width"></label>
      <label>Length: <input v-model="formData.length" type="text" placeholder="Length"></label>
      <label>Diameter: <input v-model="formData.diameter" type="text" placeholder="Diameter"></label>
      <label>Quantity Type: <select v-model="formData.quantityType">
        <option value="sqFt">Sq. Feet</option>
        <option value="lnFt">Ln. Feet</option>
        <option value="ea">Ea.</option>
      </select></label>
      <label>Quantity : <input v-model="formData.quantity" type="text" placeholder="Quantity"></label>
      
      <input type="submit" @click="sumbitForm" value="Submit">

      <p>{{ formData.partName }}</p>
      </form>
    </div>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
}
</style>