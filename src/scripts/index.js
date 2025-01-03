import 'regenerator-runtime';
import '../styles/user/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderUserPage();
});
 
window.addEventListener('load', () => {
  app.renderUserPage();
});
