import 'regenerator-runtime';
import '../styles/admin/style.css';
import '../styles/admin/responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderAdminPage();
});
 
window.addEventListener('load', () => {
  app.renderAdminPage();
});
