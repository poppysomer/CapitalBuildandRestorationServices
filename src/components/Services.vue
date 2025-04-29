<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          icon: 'broom',
          title: 'Residential Construction',
          description:
            'High-quality home building, renovations, and remodeling tailored to your lifestyle.',
          slug: "residential-construction"
        },
        {
          icon: 'building',
          title: 'Commercial Construction',
          description:
            'Professional construction services for offices, retail spaces, and industrial buildings.',
          slug: "commercial-construction"
        },
        {
          icon: 'trash-alt',
          title: 'Post-Construction Cleaning',
          description:
            'Detailed cleaning services to make new spaces spotless and move-in ready.',
          slug: "post-construction-cleaning"
        },
        {
          icon: 'spray-can',
          title: 'Deep Cleaning Services',
          description:
            'Comprehensive cleaning solutions to refresh and sanitize homes or commercial spaces.',
          slug: "deep-cleaning-services"
        },
        {
          icon: 'hammer',
          title: 'Site Preparation',
          description:
            'Grading, excavation, and clearing to prepare for new construction.',
          slug: "site-preparation"
        },
        {
          icon: 'tools',
          title: 'Maintenance & Repairs',
          description:
            'Ongoing property maintenance, inspections, and quick repairs to extend property life.',
          slug: "maintenance-repairs"
        },
      ],
    }
  },
}
</script>

<template>
  <div class="services-container">
    <h1>Our Services</h1>
    <div class="service-cards">
      <router-link
        v-for="(service, index) in services"
        :key="index"
        :to="`/services/${service.slug}`"
        class="service-card"
      >
        <font-awesome-icon :icon="service.icon" size="2x" />
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </router-link>
    </div>
  </div>
</template>


<style scoped>
.services-container {
  text-align: center;
  padding: 2rem;
}

.service-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.service-card {
  display: block;
  text-decoration: none;
  color: inherit;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

font-awesome-icon {
  color: #007bff;
  margin-bottom: 1rem;
}
</style>