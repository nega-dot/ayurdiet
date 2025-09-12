// Main JavaScript functionality for AyurDiet
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.createElement('div');
  
  if (mobileMenuBtn) {
    mobileMenu.className = 'fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl transform translate-x-full transition-transform duration-300 md:hidden';
    mobileMenu.innerHTML = `
      <div class="flex items-center justify-between p-4 border-b">
        <span class="text-xl font-bold text-[#141711]">Menu</span>
        <button id="mobile-menu-close" class="text-[#4B5563]">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav class="p-4 space-y-4">
        <a href="#features" class="block text-[#4B5563] hover:text-[#7FB069] py-2">Features</a>
        <a href="#services" class="block text-[#4B5563] hover:text-[#7FB069] py-2">Services</a>
        <a href="#pricing" class="block text-[#4B5563] hover:text-[#7FB069] py-2">Pricing</a>
        <a href="about.html" class="block text-[#4B5563] hover:text-[#7FB069] py-2">About</a>
        <a href="contact.html" class="block text-[#4B5563] hover:text-[#7FB069] py-2">Contact</a>
        <div class="pt-4 border-t">
          <a href="login.html" class="block text-[#4B5563] hover:text-[#7FB069] py-2">Login</a>
          <a href="signup.html" class="block bg-[#7FB069] text-white px-4 py-2 rounded-lg text-center mt-2">Get Started</a>
        </div>
      </nav>
    `;
    
    document.body.appendChild(mobileMenu);
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
    });
    
    const closeBtn = mobileMenu.querySelector('#mobile-menu-close');
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('translate-x-full');
      }
    });
  }

  // Header scroll effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }

  // Counter animation
  const counters = document.querySelectorAll('[data-counter]');
  const observerOptions = {
    threshold: 0.7
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.counter);
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        
        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // FAQ functionality
  const faqContainer = document.getElementById('faq-container');
  if (faqContainer) {
    const faqToggles = faqContainer.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('span');
        
        // Close other FAQs
        faqToggles.forEach(otherToggle => {
          if (otherToggle !== toggle) {
            const otherContent = otherToggle.nextElementSibling;
            const otherIcon = otherToggle.querySelector('span');
            otherContent.classList.add('hidden');
            otherIcon.textContent = '+';
          }
        });
        
        // Toggle current FAQ
        content.classList.toggle('hidden');
        icon.textContent = content.classList.contains('hidden') ? '+' : '−';
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu if open
        const mobileMenu = document.querySelector('.fixed.inset-y-0.right-0');
        if (mobileMenu) {
          mobileMenu.classList.add('translate-x-full');
        }
      }
    });
  });

  // Form validation and submission
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('border-red-500');
          
          // Remove error styling on input
          field.addEventListener('input', function() {
            this.classList.remove('border-red-500');
          }, { once: true });
        }
      });
      
      if (isValid) {
        // Show success message or redirect
        showNotification('Form submitted successfully!', 'success');
        form.reset();
      } else {
        showNotification('Please fill in all required fields.', 'error');
      }
    });
  });

  // Notification system
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transform transition-all duration-300 translate-x-full`;
    
    switch(type) {
      case 'success':
        notification.classList.add('bg-[#7FB069]');
        break;
      case 'error':
        notification.classList.add('bg-red-500');
        break;
      case 'warning':
        notification.classList.add('bg-[#D97706]');
        break;
      default:
        notification.classList.add('bg-[#4B5563]');
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Lazy loading for images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    imageObserver.observe(img);
  });

  // Add loading class to buttons
  document.querySelectorAll('button[type="submit"]').forEach(button => {
    button.addEventListener('click', function() {
      if (this.form && this.form.checkValidity()) {
        this.classList.add('loading');
        this.disabled = true;
        
        setTimeout(() => {
          this.classList.remove('loading');
          this.disabled = false;
        }, 2000);
      }
    });
  });

  // Intersection Observer for animations
  const animatedElements = document.querySelectorAll('.hover-lift, .card');
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animationObserver.observe(element);
  });

  // Initialize tooltips (if needed)
  const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
  tooltipTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', function() {
      const tooltip = document.createElement('div');
      tooltip.className = 'absolute z-50 px-2 py-1 text-sm text-white bg-black rounded shadow-lg';
      tooltip.textContent = this.dataset.tooltip;
      tooltip.id = 'tooltip';
      
      document.body.appendChild(tooltip);
      
      const rect = this.getBoundingClientRect();
      tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
      tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
    });
    
    trigger.addEventListener('mouseleave', function() {
      const tooltip = document.getElementById('tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    });
  });
});

// Utility functions
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { debounce, throttle };
}