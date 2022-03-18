import '@/page/page-about/pageAbout.scss';
import Page from '@/page/Page';

const content = `
  <h1>About</h1>
  <a href="#navigation" class="back"></a>
`;

export default new Page({ slug: 'about', content });
