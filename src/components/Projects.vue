<script setup>
const projects = [
  {
    title: 'Kitchen Renovation',
    description: 'We turned this dated kitchen into a sleek, modern cooking space.',
    before: '/projects/kitchen-before.jpg',
    after: '/projects/kitchen-after.jpg',
  },
  {
    title: 'Office Deep Clean',
    description: 'Post-renovation cleaning left this office spotless and client-ready.',
    before: '/projects/office-before.jpg',
    after: '/projects/office-after.jpg',
  },
  {
    title: 'Bathroom Remodel',
    description: 'A complete transformation from basic to luxurious.',
    before: '/projects/bathroom-before.jpg',
    after: '/projects/bathroom-after.jpg',
  },
];
</script>


<template>
  <section class="projects">
    <div class="projects-header">
      <h1>Our Work</h1>
      <p>We take pride in every project. From foundation to finish — see the transformation in our clients’ spaces.</p>
    </div>

    <div class="projects-grid">
      <div class="project-card" v-for="(project, index) in projects" :key="index">
        <div class="project-images">
          <img :src="project.before" alt="Before" class="before" />
          <img :src="project.after" alt="After" class="after" />
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 5rem 2rem;
  background-color: transparent;
  text-align: center;
}

.projects-header h1 {
  font-size: 2.8rem;
  color: #222;
  margin-bottom: 1rem;
}

.projects-header p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-images {
  display: flex;
  justify-content: space-between;
  gap: 1px;
}

.project-images img {
  width: 50%;
  height: 200px;
  object-fit: cover;
}

.project-card h3 {
  margin: 1rem 0 0.5rem;
  font-size: 1.3rem;
  color: #222;
}

.project-card p {
  font-size: 1rem;
  color: #555;
  padding: 0 1rem 1.5rem;
}
</style>