import '@/page/page-about/pageAbout.scss';
import Page from '@/page/Page';

const content = `
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis doloremque perspiciatis dolorem tenetur porro praesentium quos dignissimos reiciendis quae hic neque earum suscipit, assumenda accusantium, voluptatum sint quas architecto vitae.</p>
`;

export default new Page({ slug: 'about', title: 'About', content });
