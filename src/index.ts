import 'normalize.css';
import '@/styles/main.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

import createApp from '@/createApp';

const elementRoot = document.getElementById('root');
if (elementRoot) {
  createApp({ elementToMount: elementRoot });
}
