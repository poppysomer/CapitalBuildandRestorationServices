<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const projects = {
  "Paint and Drywall Patching": [
    {
      title: "Bathroom Wall Paintjob",
      image: "/project-pictures/1.jpeg",
      description: "Filled in holes and repainted bathroom walls."
    },
    {
      title: "Bedroom Wall Paintjob",
      image: "/project-pictures/2.jpeg",
      description: "Filled in holes and repainted walls."
    },
    {
      title: "3",
      image: "/project-pictures/3.jpeg",
      description: "Filled in holes and repainted bathroom walls."
    },
    {
      title: "4",
      image: "/project-pictures/4.jpeg",
      description: "Filled in holes and repainted bathroom walls."
    },
    {
      title: "5",
      image: "/project-pictures/5.jpeg",
      description: "Filled in holes and repainted bathroom walls."
    },
    {
      title: "6",
      image: "/project-pictures/6.jpeg",
      description: "Filled in holes and repainted bathroom walls."
    },
    {
      title: "7",
      image: "/project-pictures/7.jpeg",
      description: "Filled in holes and repainted bathroom walls."
    },
    {
      title: "8",
      image: "/project-pictures/8.jpeg",
      description: "Filled in holes and repainted bathroom walls."
    },
    {
      title: "9",
      image: "/project-pictures/9.jpeg",
      description: "Filled in holes and repainted bathroom walls."
    },
    {
      title: "10",
      image: "/project-pictures/10.jpeg",
      description: "Filled in holes and repainted bathroom walls."
    },
  ]
}
</script>

<template>
  <div class="projects-container">
    <h1>Our Projects</h1>

    <div v-for="(categoryProjects, category) in projects" :key="category" class="category-block">
      <h2>{{ category }}</h2>
      <vueper-slides
        class="category-slideshow"
        :visible-slides="1"
        :bullets="true"
        :arrows="true"
        :autoplay="true"
        :speed="4000"
      >
      <vueper-slide
        v-for="project in categoryProjects"
        :key="project.title"
        :image="project.image"
      >
        <div class="slide-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </vueper-slide>
      </vueper-slides>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.category-block {
  margin-bottom: 4rem;
}

h2 {
  margin-bottom: 1rem;
  color: rgb(0, 0, 0);
  border-bottom: 2px solid darkblue;
  display: inline-block;
  padding-bottom: 0.25rem;
}

.category-slideshow {
  max-width: 1000px;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
}

.custom-slide .vueperslide__image {
  background-size: contain; /* Or use 'cover' if you want it to fill the area */
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh; /* Controls height of the slide, adjust as needed */
}

.slide-content {
  background: rgba(0, 0, 0, 0.85);
  padding: 1rem;
  text-align: center;
  border-radius: 0 0 10px 10px;
}

.slide-content h3 {
  margin: 0.5rem 0;
}

.slide-content p {
  font-size: 0.95rem;
  color: #444;
}
</style>