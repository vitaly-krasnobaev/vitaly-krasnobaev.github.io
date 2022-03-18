import Router from '@/Router';

import Page from '@/page/Page';
import pageHome from '@/page/page-home/pageHome';
import pageNavigation from '@/page/page-navigation/pageNavigation';
import pageAbout from '@/page/page-about/pageAbout';
import pageEducation from '@/page/page-education/pageEducation';
import pageExperience from '@/page/page-experience/pageExperience';
import pageTechStack from '@/page/page-tech-stack/pageTechStack';
import pageContacts from '@/page/page-contacts/pageContacts';

type pagesType = {
  [key: string]: Page;
};

export default class Render {
  elementToMount: HTMLElement;
  pages: pagesType;

  constructor(elementToMount: HTMLElement) {
    this.elementToMount = elementToMount;
    this.pages = {
      home: pageHome,
      navigation: pageNavigation,
      about: pageAbout,
      education: pageEducation,
      experience: pageExperience,
      'tech-stack': pageTechStack,
      contacts: pageContacts
    };
  }

  mount(pageId: string, router: Router) {
    console.error(pageId);
    if (!this.pages[pageId]) {
      router.push('#home');
      return;
    }

    this.pages[pageId].mount(this.elementToMount);
  }
}
