type PageOptions = {
  slug: string;
  title?: string;
  content: string;
};

export default class Page {
  slug: string;
  title: string;
  template: string;

  constructor({ slug, title = '', content }: PageOptions) {
    this.slug = slug;
    this.title = title;
    this.template = this.createTemplate(content);
  }

  createTemplate(content: string): string {
    const { slug, title } = this;

    const defaultContent = `
      <div class="page__content">
        ${content}
      </div>
      <div class="page__footer">
        <a href="#navigation" class="page__back"></a>
        <h1 class="page__title">${title}</h1>
      </div>
    `;

    const template = `
      <div id="${slug}" class="page page--${slug}">
        <div class="container container--${slug}">
          ${slug === 'home' || slug === 'navigation' ? content : defaultContent}
        </div>
      </div>
    `;
    return template;
  }

  mount(elementToMount: HTMLElement): void {
    elementToMount.innerHTML = this.template;
    this.mounted();
  }

  mounted(): void {
    console.log('Mounted');
  }
}
