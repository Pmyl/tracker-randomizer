import { ImageRepository } from 'src/app/core-ui/image-repository/image-repository';
import { Injectable } from '@angular/core';
import { ImagesService } from './base/images-service';

@Injectable()
export class JsonImages implements ImagesService {
  private _imageRepo: ImageRepository;
  private _filename: string;
  private _preloadedImagesCache: Array<HTMLImageElement> = [];

  constructor(imageRepo: ImageRepository, filename: string) {
    this._imageRepo = imageRepo;
    this._filename = filename;
  }

  public async setImagesInRepository(): Promise<void> {
    const images: { [key: string]: string } = await (await fetch(this._filename)).json();
    this._preloadedImagesCache = [];

    Object.keys(images).forEach(id => {
      this._preloadImage(images[id]);
      this._imageRepo.addImage(id, images[id]);
    });
  }

  private _preloadImage(url: string): void {
    const img: HTMLImageElement = new Image();
    img.src = url;
    this._preloadedImagesCache.push(img);
  }
}