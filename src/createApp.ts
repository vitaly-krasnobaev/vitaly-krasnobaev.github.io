import Router from '@/Router';
import Render from '@/Render';

type createAppOptions = {
  elementToMount: HTMLElement;
};

export default function createApp({ elementToMount }: createAppOptions) {
  const router = new Router(window.location.hash);
  window.addEventListener('hashchange', router.onHashchange.bind(router));

  const render = new Render(elementToMount);
  document.addEventListener('pageIdChange', (({ detail }: CustomEvent) => {
    const { pageId } = detail;
    render?.mount(pageId, router);
  }) as EventListener);

  router.dispatchEvent();
}
