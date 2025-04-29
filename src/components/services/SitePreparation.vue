<script setup>
</script>

<template>
<div class="service-detail">
    <h1>Site Preparation</h1>
    <p>Grading, excavation, and clearing to prepare for new construction.</p>
    <router-link to="/services" class="back-button">← Back to Services</router-link>
</div>
</template>

<style scoped>
.service-detail {
  max-width: 700px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
}

.back-button {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.back-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}
</style>