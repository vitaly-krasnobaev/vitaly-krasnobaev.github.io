import '@/page/page-tech-stack/pageTechStack.scss';
import Page from '@/page/Page';

const content = `
  <ul>
    <li>Languages - JS, TypeScript, php(base);</li>
    <li>Frameworks - Vue.js, React, jQuery, laravel;</li>
    <li>UI - Vuetify, Bootstrap;</li>
    <li>Build system - webpack, vite, gulp;</li>
    <li>Package managers - yarn, npm;</li>
    <li>Preprocessor - SASS, LESS, PostCSS;</li>
    <li>VCS - git, gitlab, github, bitbucket;</li>
    <li>IDE - VS Code, WebStorm.</li>
  </ul>
`;

export default new Page({ slug: 'tech-stack', title: 'Tech Stack', content });
