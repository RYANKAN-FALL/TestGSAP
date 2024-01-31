import { greetUser } from '$utils/greet';
import { gsap } from 'gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
});
