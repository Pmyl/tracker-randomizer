export class ImageRepository {
  private _imagesMap: { [key: string]: string } = {};

  public addImage(id: string, url: string): void {
    this._imagesMap[id] = url;
  }

  public addImages(images: { [key: string]: string }): void {
    Object.assign(this._imagesMap, images);
  }

  public getImageForId(id: string): string {
    if (!this._imagesMap[id])
      console.warn("Image not found for id", id);

    return this._imagesMap[id];
  }
}