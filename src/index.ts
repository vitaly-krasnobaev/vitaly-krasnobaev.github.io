import 'normalize.css';
import '@/styles/main.scss';

import createApp from '@/createApp';

const elementRoot = document.getElementById('root');
if (elementRoot) {
  createApp({ elementToMount: elementRoot });
}
