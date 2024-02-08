import { greetUser } from './utils/greet.js';

if (window.Webflow) {
  window.Webflow.push(async () => {
    const name = 'YOGA';
    greetUser(name);

    if (window.gsap) {
      let loopTl = gsap.timeline({ repeat: -1, yoyo: true });
      loopTl.to('.hero-image', { y: '-1rem', duration: 1, ease: 'power1.inOut' });

      const loadTl = gsap.timeline();
      loadTl.from('.title-wrap', { opacity: 0, y: '6rem', duration: 5 });
      loadTl.from('.image1', { scale: 0, stagger: { amount: 0.5 }, duration: 2 });
      loadTl.from('.hero-image', { opacity: 0, scale: 0.8, duration: 1 });
    }
  });
}

// The "rapikan" comment seems to be left without any context or code following it. If you have further code or instructions, please provide them.
