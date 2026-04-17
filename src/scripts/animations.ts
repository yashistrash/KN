// Scroll-triggered fade/slide animations
const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('[data-animate]').forEach((el) => animObserver.observe(el));

// Count-up animation for stats ribbon
function animateCount(el: Element, target: number, duration = 1600) {
  const start = performance.now();
  function step(now: number) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    (el as HTMLElement).textContent = String(Math.floor(eased * target));
    if (progress < 1) requestAnimationFrame(step);
    else (el as HTMLElement).textContent = String(target);
  }
  requestAnimationFrame(step);
}

const statsRibbon = document.querySelector('.stats-ribbon');
if (statsRibbon) {
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.count-up').forEach((el) => {
            const target = parseInt((el as HTMLElement).dataset.target ?? '0');
            animateCount(el, target);
          });
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  countObserver.observe(statsRibbon);
}
