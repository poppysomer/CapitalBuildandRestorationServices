import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import SitePreparationView from '@/views/services/SitePreparationView.vue';
import DeepCleaningView from '@/views/services/DeepCleaningView.vue';
import CommercialConstructionView from '@/views/services/CommercialConstructionView.vue';
import MaintenanceRepairsView from '@/views/services/MaintenanceRepairsView.vue';
import PostConstructionCleaningView from '@/views/services/PostConstructionCleaningView.vue';
import ResidentialConstructionView from '@/views/services/ResidentialConstructionView.vue';
import ThankYouView from '@/views/ThankYouView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYouView,
    },
    { path: '/services', name: 'Services', component: ServicesView },
    { path: '/services/site-preparation', name: 'SitePreparation', component: SitePreparationView },
    { path: '/services/deep-cleaning-services', name: 'DeepCleaning', component: DeepCleaningView },
    { path: '/services/commercial-construction', name: 'CommercialConstruction', component: CommercialConstructionView },
    { path: '/services/maintenance-repairs', name: 'MaintenanceRepairs', component: MaintenanceRepairsView },
    { path: '/services/post-construction-cleaning', name: 'PostConstructionCleaning', component: PostConstructionCleaningView },
    { path: '/services/residential-construction', name: 'ResidentialConstruction', component: ResidentialConstructionView },
  ],
})

export default router
