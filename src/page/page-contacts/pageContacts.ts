import '@/page/page-contacts/page-contacts.scss';
import Page from '@/page/Page';

const content = `
  <div class="contacts">
    <a href="https://t.me/codefromrussia" target="_blank" class="contacts__link">
      <i class="contacts__icon fa-brands fa-telegram"></i>
      <span class="contacts__label">Telegram</span>
    </a>
    <a href="https://www.linkedin.com/in/vitaly-krasnobaev" target="_blank" class="contacts__link">
      <i class="contacts__icon fa-brands fa-linkedin"></i>
      <span class="contacts__label">Linkedin</span>
    </a>
    <a href="mailto:codefromrussia@gmail.com" class="contacts__link">
      <i class="contacts__icon fa-solid fa-envelope"></i>
      <span class="contacts__label">E-mail</span>
    </a>
  </div>
`;

export default new Page({ slug: 'contacts', title: 'Contacts', content });
