<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
  <section class="home">
    <div class="home-image">
      <img src="@/assets/MainPagePicture.jpg" alt="Hero Image" />
    </div>
    <div class="home-content">
      <h1>Build with Confidence</h1>
      <p>
        Capital Build and Restoration Services delivers high-quality construction and remodeling tailored to your vision.
      </p>
      <RouterLink to="/contact" class="cta-button">
        Get a Free Quote
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: transparent;
  width: 100%;
  margin: 0;
  padding: 0;
}

.home-image {
  width: 100%;
  padding: 0 1rem; /* Horizontal padding */
  box-sizing: border-box;
}

.home-image img {
  width: 100%;
  height: auto; /* Maintains aspect ratio */
  max-height: 750px;
  object-fit: cover;
  object-position: center;
  display: block;
  border-radius: 8px; /* Optional for smooth corners */
}

.home-content {
  margin-top: 3rem;
  padding: 0 2rem;
  max-width: 800px;
}

.home-content h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.5rem;
}

.home-content p {
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #007BFF;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #0056b3;
}
</style>