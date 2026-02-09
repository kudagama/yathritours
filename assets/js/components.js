const headerHTML = `
<header class="fixed w-full top-0 left-0 bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
      <a href="index.html" class="flex items-center gap-3 group">
        <img src="assets/img/yathritours/logo.png" alt="Yathritours"
          class="h-10 w-auto group-hover:scale-105 transition-transform duration-300">
      </a>

      <nav class="hidden md:flex space-x-8 items-center" id="desktop-nav">
        <a href="index.html" class="text-gray-800 font-medium uppercase tracking-wider text-sm hover:text-primary transition-colors">Home</a>
        <a href="destination.html" class="text-gray-800 font-medium uppercase tracking-wider text-sm hover:text-primary transition-colors">Destination</a>
        <a href="about.html" class="text-gray-800 font-medium uppercase tracking-wider text-sm hover:text-primary transition-colors">About Us</a>
        <a href="contact.html" class="text-gray-800 font-medium uppercase tracking-wider text-sm hover:text-primary transition-colors">Contact</a>
      </nav>

      <a href="contact.html"
        class="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:-translate-y-0.5">
        Book Now
      </a>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-gray-800 focus:outline-none" id="mobile-menu-btn" onclick="toggleMobileMenu()">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu (Hidden by default) -->
    <div class="md:hidden hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg" id="mobile-menu">
        <div class="flex flex-col p-4 space-y-4">
            <a href="index.html" class="text-gray-800 font-medium uppercase tracking-wider text-sm hover:text-primary transition-colors">Home</a>
            <a href="destination.html" class="text-gray-800 font-medium uppercase tracking-wider text-sm hover:text-primary transition-colors">Destination</a>
            <a href="about.html" class="text-gray-800 font-medium uppercase tracking-wider text-sm hover:text-primary transition-colors">About Us</a>
            <a href="contact.html" class="text-gray-800 font-medium uppercase tracking-wider text-sm hover:text-primary transition-colors">Contact</a>
        </div>
    </div>
</header>
`;

const footerHTML = `
<footer class="bg-dark text-white py-16 border-t border-white/10">
    <div class="container mx-auto px-6 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div class="col-span-1 md:col-span-2">
          <img src="assets/img/yathritours/logo.png" alt="Yathritours Logo" class="h-12 w-auto mb-6 ">
          <p class="text-gray-400 leading-relaxed max-w-sm">
            Discover the magic of Sri Lanka with us. We are dedicated to providing authentic, safe, and unforgettable
            travel experiences across the island.
          </p>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-6 text-white border-b-2 border-primary inline-block pb-2">Quick Links</h4>
          <ul class="space-y-3 text-gray-300">
            <li><a href="index.html" class="hover:text-primary transition-colors">Home</a></li>
            <li><a href="destination.html" class="hover:text-primary transition-colors">Destinations</a></li>
            <li><a href="about.html" class="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="contact.html" class="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-bold mb-6 text-white border-b-2 border-primary inline-block pb-2">Contact Info</h4>
          <ul class="space-y-4 text-gray-300">
            <li class="flex items-start gap-3">
              <span class="text-primary mt-1">📍</span> No81, Sella Road, Kataragama 91400, Sri Lanka
            </li>
            <li class="flex items-center gap-3">
              <span class="text-primary">📞</span> <a href="tel:0777472567" class="hover:text-white">0777472567</a>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-primary">✉️</span> <a href="mailto:yathritours@email.com"
                class="hover:text-white">yathritours@email.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2026 Yathri Tours. All rights reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-white transition-colors">Instagram</a>
          <a href="#" class="hover:text-white transition-colors">Facebook</a>
          <a href="#" class="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </div>
  </footer>
`;

function renderComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        highlightActiveLink();
    }
    
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const links = document.querySelectorAll('nav a, #mobile-menu a');
    
    links.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.remove('text-gray-800', 'font-medium');
            link.classList.add('text-primary', 'font-bold');
        }
    });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Run on load
document.addEventListener('DOMContentLoaded', renderComponents);
