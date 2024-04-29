import { createMemoryHistory, createRouter } from 'vue-router'

import ShowParts from './components/ShowParts.vue'
import ShowLocations from './components/ShowLocations.vue'
import ShowPart from './components/ShowPart.vue'
import PartForm from './components/PartForm.vue'

const routes = [
  { path: '/Parts', component: ShowParts },
  { path: '/Locations', component: ShowLocations },
  { path: '/parts/:id', component: ShowPart },
  { path: '/partForm', component: PartForm },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router