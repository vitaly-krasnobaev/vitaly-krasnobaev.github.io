type PageOptions = {
  slug: string;
  content: string;
};

export default class Page {
  slug: string;
  template: string;

  constructor({ slug, content }: PageOptions) {
    this.slug = slug;
    this.template = `
      <div id="${slug}" class="page page--${slug}">
        <div class="container container--${slug}">
          ${content}
        </div>
      </div>
    `;
  }

  mount(elementToMount: HTMLElement): void {
    elementToMount.innerHTML = this.template;
    this.mounted();
  }

  mounted(): void {
    console.log('Mounted');
  }
}
