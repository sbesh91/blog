export const routes = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' }
];

export const navigate = (path) => {
  const page = path === '/' ? '/' : path.slice(1);
  load(page);
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