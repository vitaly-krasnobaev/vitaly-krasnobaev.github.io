import '@/page/page-navigation/pageNavigation.scss';
import Page from '@/page/Page';

const content = `
  <nav class="navigation">
    <ul class="navigation__list">
      <li><a href="#about" class="navigation__link">About</a></li>
      <li><a href="#education" class="navigation__link">Education</a></li>
      <li><a href="#experience" class="navigation__link">Experience</a></li>
      <li><a href="#tech-stack" class="navigation__link">Tech stack</a></li>
      <li><a href="#contacts" class="navigation__link">Contacts</a></li>
    </ul>
  </nav>
`;

export default new Page({ slug: 'navigation', content });
