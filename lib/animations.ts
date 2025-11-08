/**
 * DANZAITALIA - Global Animations Module
 * Handles scroll reveal animations and micro-interactions across all pages
 */

export function initGlobalAnimations() {
  if (typeof window === 'undefined') return;
  if ((window as any)._globalAnimationsInit) return;
  (window as any)._globalAnimationsInit = true;

  // Scroll reveal animations
  const handleScroll = () => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };

  // Card stagger fade-in animation
  const initCardAnimations = () => {
    const cards = document.querySelectorAll('.card-animate');
    cards.forEach((card, i) => {
      const el = card as HTMLElement;
      if (el.dataset.animated === 'true') return;

      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';

      setTimeout(() => {
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.dataset.animated = 'true';
      }, 100 * i);
    });
  };

  // Magnetic button effect
  const initMagneticButtons = () => {
    const buttons = document.querySelectorAll('.magnetic-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', function(this: any) {
        this.style.transform = 'scale(1.05)';
      });
      btn.addEventListener('mouseleave', function(this: any) {
        this.style.transform = 'scale(1)';
      });
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // Initialize animations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initCardAnimations();
      initMagneticButtons();
    });
  } else {
    initCardAnimations();
    initMagneticButtons();
  }

  // Re-initialize on route changes (for Next.js)
  const observer = new MutationObserver(() => {
    handleScroll();
    initCardAnimations();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// Export for manual trigger
export function triggerRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}
