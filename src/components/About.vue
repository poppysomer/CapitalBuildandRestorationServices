<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="about">
    <div class="about-container">
      <div class="about-text">
        <h1>About Us</h1>
        <p>
          At <strong>Capital Build and Restoration Services</strong>, we are passionate about delivering quality construction work and pristine cleaning services. 
          With years of experience, we pride ourselves on craftsmanship, reliability, and customer satisfaction.
        </p>
        <ul class="values-list">
          <li><i class="fas fa-check-circle"></i> Experienced & Licensed Professionals</li>
          <li><i class="fas fa-check-circle"></i> Top-Quality Materials & Techniques</li>
          <li><i class="fas fa-check-circle"></i> Transparent Communication</li>
          <li><i class="fas fa-check-circle"></i> On-Time Project Delivery</li>
        </ul>
        <RouterLink to="/contact" class="cta-button">
          Get a Free Quote
        </RouterLink>
      </div>

      <div class="about-image">
        <img src="@/assets/HomePagePicture.jpg" alt="Our team at work" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background-color: transparent;
  padding: 5rem 2rem;
}

.about-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-text {
  flex: 1;
  min-width: 300px;
}

.about-text h1 {
  font-size: 2.8rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.5rem;
}

.about-text p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.values-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.values-list li {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
}

.values-list i {
  color: #28a745;
  margin-right: 0.5rem;
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

.about-image {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
}

.about-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}
</style>