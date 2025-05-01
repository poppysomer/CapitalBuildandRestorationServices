<script>
import { RouterLink } from 'vue-router';
export default {
  name: 'Copyright',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-logo">
        <img src="@/assets/CapitalBuildandRestorationServicesLogo.svg" alt="Logo" />
        <p>Serving you with quality construction.</p>
      </div>

      <div class="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/services">Services</RouterLink></li>
          <li><RouterLink to="/projects">Projects</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>

      <div class="footer-socials">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="https://www.facebook.com/share/1WzF2zo5yB/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/capitalbuildandrestoration?igsh=MW5nNG13YjV6MHdnMQ%3D%3D&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Capital Build and Restoration Services. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    background-color: transparent;
    color: #eee;
    padding: 3rem 2rem 2rem;
    font-size: 0.95rem;
  }

  .footer-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    border-bottom: 1px solid #444;
    padding-bottom: 2rem;
  }

  .footer-logo img {
    height: 75px;
    margin-bottom: 1rem;
  }

  .footer-logo p {
    max-width: 300px;
    color: black;
    line-height: 1.5;
  }

  .footer-links h3,
  .footer-socials h3 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: grey;
  }

  .footer-links ul {
    list-style: none;
    padding: 0;
  }

  .footer-links li {
    margin: 0.5rem 0;
  }

  .footer-links a {
    color: grey;
    text-decoration: none;
    transition: color 0.2s;
  }

  .footer-links a:hover {
    color: black;
  }

  .footer-socials .social-icons a {
    margin-right: 1rem;
    color: grey;
    font-size: 1.4rem;
    transition: color 0.3s;
  }

  .footer-socials .social-icons a:hover {
    color: #1e90ff;
  }

  .footer-bottom {
    text-align: center;
    padding-top: 1.5rem;
    font-size: 0.85rem;
    color: black;
  }
</style>