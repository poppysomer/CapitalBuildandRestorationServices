<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'
import { useRouter } from 'vue-router'
const router = useRouter()

// Contact form state
const form = ref({
  name: '',
  email: '',
  message: ''
})
const status = ref('')

// Send email function
const sendEmail = () => {
  const serviceID = 'Mcleans_service'
  const templateID = 'Mcleans_template'
  const publicKey = 'OlB__5UCYjkQjHNiL'

  emailjs.send(serviceID, templateID, {
    user_name: form.value.name,
    user_email: form.value.email,
    message: form.value.message,
  }, publicKey)
    .then(() => {
      form.value = { name: '', email: '', message: '' }
      router.push('/thank-you') // redirect to confirmation page
    })
    .catch((error) => {
      console.error(error)
      status.value = 'Failed to send message.'
    })
}

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faUser,
  faEnvelope,
  faCommentDots,
  faMapMarkerAlt,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

// Register icons
library.add(
  faUser,
  faEnvelope,
  faCommentDots,
  faMapMarkerAlt,
  faPhoneAlt,
  faFacebookF,
  faInstagram,
  faLinkedinIn
)
</script>

<template>
  <section class="contact">
    <div class="contact-header">
      <h1>Contact Us</h1>
      <p>Got a project in mind or need cleaning services? Reach out — we’re ready to help!</p>
    </div>

    <div class="contact-container">
      <div class="contact-form">

        <!--
        hadi_sakka@live.ca
        davidisdaddy123 
        -->
        <form @submit.prevent="sendEmail" class="contact-form">
          <div class="input-group">
            <font-awesome-icon icon="user" class="input-icon" />
            <input v-model="form.name" type="text" name="user_name" placeholder="Your Name" required />
          </div>

          <div class="input-group">
            <font-awesome-icon icon="envelope" class="input-icon" />
            <input v-model="form.email" type="email" name="user_email" placeholder="Your Email" required />
          </div>

          <div class="input-group">
            <font-awesome-icon icon="comment-dots" class="input-icon" />
            <textarea v-model="form.message" name="message" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit">Send</button>
          <p v-if="status">{{ status }}</p>
        </form>
      </div>

      <div class="contact-info">
        <h2>Contact Us</h2>
        <div class="info-group">
          <p>
            <font-awesome-icon icon="map-marker-alt" class="icon" />
            <a
              href="https://www.google.com/maps?q=Ottawa+Ontario+Canada"
              target="_blank"
              rel="noopener"
            >
              Ottawa, Ontario, Canada
            </a>
          </p>

          <p>
            <font-awesome-icon icon="phone-alt" class="icon" />
            <a href="tel:+14163181594">(416) 318 1594</a>
          </p>
          <p>
            <font-awesome-icon icon="envelope" class="icon" />
            <a href="mailto:hadi_sakka@live.ca">hadi_sakka@live.ca</a>
          </p>
        </div>

        <hr class="divider" />

        <div class="social-links">
          <a href="https://www.facebook.com/share/1WzF2zo5yB/?mibextid=wwXIfr" target="_blank" aria-label="Facebook">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>
          <a href="https://www.instagram.com/capitalbuildandrestoration?igsh=MW5nNG13YjV6MHdnMQ%3D%3D&utm_source=qr" target="_blank" aria-label="Instagram">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-form {
  flex: 1;
  min-width: 300px;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

input,
textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

button {
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #0056b3;
}

p[v-cloak],
p[v-if="status"] {
  margin-top: 1rem;
  color: #28a745;
  font-weight: 500;
}

.contact {
  padding: 5rem 2rem;
  background-color: transparent;
  text-align: center;
}

.contact-header h1 {
  font-size: 2.8rem;
  color: #222;
  margin-bottom: 1rem;
}

.contact-header p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /* stack vertically */
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  justify-content: center;
}

.contact-info {
  flex: 1;
  min-width: 300px;
  background: rgb(255, 243, 230);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.contact-form {
  background: rgb(255, 243, 230);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  text-align: left;
}
input, textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 0.75rem;
  font-size: 1.1rem;
  background: darkblue;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}


.contact-info {
  text-align: center;
  padding: 2rem;
}

.contact-info h2 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: #222;
}

.info-group p {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
  font-size: 1rem;
  color: black;
}

.info-group .icon {
  margin-right: 0.5rem;
  color: #007bff;
  font-size: 1.1rem;
}

.divider {
  margin: 1.5rem auto;
  border: none;
  height: 1px;
  width: 60%;
  background-color: black;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 0.5rem;
}

.contact-info a {
  color: #007bff; /* Bootstrap's standard blue or pick your own */
  text-decoration: underline;
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: #0056b3;
}

.social-links a {
  font-size: 1.3rem;
  color: #333;
  transition: transform 0.2s, color 0.3s;
}

.social-links a:hover {
  color: #007bff;
  transform: scale(1.1);
}

.input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 1rem 1rem 1rem 2.5rem;
  font-size: 1.1rem;
}

.input-group textarea {
  min-height: 150px;
  resize: vertical;
}

.input-icon {
  position: absolute;
  left: 0.75rem;
  color: #007bff;
  font-size: 1.1rem;
}


@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }

  .contact-form,
  .contact-info {
    width: 100%;
    max-width: 100%;
    padding: 1.5rem;
  }

  .contact-header h1 {
    font-size: 2rem;
  }

  .contact-header p {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .input-group input,
  .input-group textarea {
    font-size: 1rem;
    padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  }

  .input-icon {
    font-size: 1rem;
    left: 0.5rem;
  }

  button {
    font-size: 1rem;
    padding: 0.65rem;
  }
}

* {
  box-sizing: border-box;
}
</style>