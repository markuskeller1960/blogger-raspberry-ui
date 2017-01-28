export class ContentCardHeaderModel {

  private title = '';
  private image = '';
  private subtitle = '';


  constructor(title: string, subtitle: string, image: string) {
    this.title = title;
    this.image = image;
    this.subtitle = subtitle;
  }

  getImage(): string {
    return this.image;
  }


  getTitle(): string {
    return this.title;
  }

  getSubtitle(): string {
    return this.subtitle;
  }
}
