import '@/page/page-home/pageHome.scss';
import Page from '@/page/Page';

const content = `
  <div id="home-content" class="home-content">
    <a href="#navigation" class="home-content__name">Vitaly Krasnobaev</a>
    <div class="home-content__profession">
      <span>Front</span>
      <span>End</span>
      <span>Developer</span>
    </div>
  </div>
`;

const pageHome = new Page({ slug: 'home', content });

pageHome.mounted = () => {
  const home = document.getElementById('home');
  const homeContent = document.getElementById('home-content');
  if (home && homeContent) {
    home.addEventListener('mousemove', (e) => {
      const x = (home.clientWidth / 2 - e.clientX) * 0.1;
      const y = (home.clientHeight / 2 - e.clientY) * 0.1;
      homeContent.style.backgroundPositionX = `calc(50% + ${x}px)`;
      homeContent.style.backgroundPositionY = `calc(50% + ${y}px)`;
    });
  }
};

export default pageHome;
