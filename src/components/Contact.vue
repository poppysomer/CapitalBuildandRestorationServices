<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

function submitForm() {
  console.log('Form submitted:', form);
  alert('Thank you for reaching out! We will get back to you soon.');
  // You would typically send `form` to your backend API here
  form.name = '';
  form.email = '';
  form.message = '';
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

// Add all required icons to the library
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
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" v-model="form.name" type="text" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>

          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>

      <div class="contact-info">
        <h2>Contact Us</h2>
        <div class="info-group">
          <p>
            <font-awesome-icon icon="map-marker-alt" class="icon" />
            <a
              href="https://www.google.com/maps?q=123+Main+Street,+Your+City,+Country"
              target="_blank"
              rel="noopener"
            >
              123 Main Street, Your City, Country
            </a>
          </p>

          <p>
            <font-awesome-icon icon="phone-alt" class="icon" />
            <a href="tel:+11234567890">(123) 456-7890</a>
          </p>
          <p>
            <font-awesome-icon icon="envelope" class="icon" />
            <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
          </p>
        </div>

        <hr class="divider" />

        <div class="social-links">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
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
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
}

.contact-form, .contact-info {
  flex: 1;
  min-width: 300px;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.contact-form form {
  display: flex;
  flex-direction: column;
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

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.submit-button {
  padding: 0.75rem;
  background-color: #007BFF;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
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
</style>