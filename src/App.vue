<script setup>
import { useRoute, RouterLink, RouterView } from 'vue-router'
import FooterSection from './components/FooterSection.vue'

const route = useRoute();

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

// Check if the current route matches the link
const isActive = (path) => route.path === path;
</script>

<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <img src="@/assets/CapitalBuildandRestorationServicesLogo.svg" alt="Logo" />
      </div>
      <nav class="nav-links">
        <RouterLink 
          v-for="link in links" 
          :key="link.name" 
          :to="link.path" 
          class="nav-link" 
          :class="{ active: isActive(link.path) }"
        >
          {{ link.name }}
        </RouterLink>
      </nav>
    </header>

    <RouterView />

    <FooterSection />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  background-color: transparent;
  box-shadow: none;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo img {
  height: 100px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  font-size: 1.1rem;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: rgb(255, 243, 230);
  color: #000000;
}

/* NEW: Active link */
.nav-link.active {
  background-color: rgb(248, 222, 194); /* Light blue for active */
  color: #000000;
}
</style>
