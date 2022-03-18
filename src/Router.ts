export default class Router {
  pageId: string;

  constructor(hash: string) {
    this.pageId = this.formatHash(hash);
  }

  onHashchange(): void {
    const { hash } = window.location;
    this.pageId = this.formatHash(hash);
    this.dispatchEvent();
  }

  formatHash(hash: string): string {
    this.pageId = hash.slice(1);
    return hash.slice(1);
  }

  push(hash: string) {
    window.location.replace(hash);
  }

  dispatchEvent() {
    const event = new CustomEvent('pageIdChange', {
      detail: { pageId: this.pageId }
    });
    document.dispatchEvent(event);
  }
}
