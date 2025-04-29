import './assets/main.css'

import '@fortawesome/fontawesome-free/css/all.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBroom,
  faBuilding,
  faTrashAlt,
  faSprayCan,
  faTools,
  faHammer,
  faPaintRoller,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

import {
    faFacebookF,
    faInstagram,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faBroom,
  faBuilding,
  faTrashAlt,
  faSprayCan,
  faTools,
  faHammer,
  faPaintRoller,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faFacebookF,
  faInstagram,
  faLinkedinIn
)


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
