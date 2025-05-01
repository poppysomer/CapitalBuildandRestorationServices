<template>
    <section class="thank-you">
        <h1>Thank You!</h1>
        <p>Your message has been sent successfully. We'll get back to you within 24-48 hours.</p>
        <router-link to="/" class="home-button">Back to Home</router-link>
    </section>
</template>

<style scoped>
.thank-you {
  padding: 4rem;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2.5rem;
  color: #007bff;
}

p {
  margin: 1rem 0;
  font-size: 1.2rem;
  color: #333;
}

.home-button {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.home-button:hover {
  background-color: #0056b3;
}
</style>