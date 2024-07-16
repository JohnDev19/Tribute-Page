document.addEventListener('DOMContentLoaded', (event) => {
  const timeline = document.querySelector('.timeline');
  const timelineItems = document.querySelectorAll('.timeline-item');

  const fadeInTimeline = () => {
    let delay = 0;
    timelineItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, delay);
      delay += 200;
    });
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fadeInTimeline();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(timeline);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click',
      function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
  });
});