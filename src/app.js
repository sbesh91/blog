export const routes = {
  '/': { label: 'Home', url: '/', selector: 'home-page', el: '' },
  '/about': { label: 'About', url: '/about', selector: 'about-page', el: '' }
};

export const navigate = async (path) => {
  const page = path === '/' ? '/' : path.slice(1);
  await load(page);
};

export const load = async (route) => {
  switch (route) {
    case '/':
      await import('./pages/home');
      break;
    case 'about':
      await import('./pages/about');
      break;
    default:
      await import('./pages/not-found');
      break;
  }
}

export const generatePageTransitionAnimation = (node, direction = 'forwards') => {
  const duration = 250;
  const baseFrame = { 'transform': 'none', 'opacity': 1 };
  const modFrame = { 'transform': 'translate(0px,-50px)', 'opacity': 0 };
  const animationTimingConfig = {
    fill: 'forwards',
    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    duration: duration
  };
  let frames;

  if (direction === 'forwards') {
    frames = [modFrame, baseFrame];
  } else {
    frames = [baseFrame, modFrame]
  }

  let effect = new KeyframeEffect(node, frames, animationTimingConfig);
  let anim = new Animation(effect, document.timeline);

  return anim;
}

export const generateBaseLoadAnimation = (node, direction = 'forwards') => {
  const duration = 250;
  const baseFrame = { 'opacity': 1 };
  const modFrame = { 'opacity': 0 };
  const animationTimingConfig = {
    fill: 'forwards',
    easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    duration: duration
  };
  let frames;

  if (direction === 'forwards') {
    frames = [modFrame, baseFrame];
  } else {
    frames = [baseFrame, modFrame]
  }

  let effect = new KeyframeEffect(node, frames, animationTimingConfig);
  let anim = new Animation(effect, document.timeline);

  return anim;
}