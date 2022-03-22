import '@/components/list-item/list-item.scss';

type ListTimeOptions = {
  image: HTMLImageElement;
  title: string;
  subtitle: string;
};

export default class ListItem {
  image: HTMLImageElement;
  title: string;
  subtitle: string;

  constructor({ image, title, subtitle }: ListTimeOptions) {
    this.image = image;
    this.title = title;
    this.subtitle = subtitle;
  }

  get template() {
    const template = `
      <div class="list-item">
      <img src="${this.image}" alt="${this.title}" class="list-item__img">
      <div class="list-item__content">
        <h2 class="list-item__title">${this.title}</h2>
        <h3 class="list-item__subtitle">${this.subtitle}</h3>
      </div>
    </div>
    `;
    return template;
  }
}
