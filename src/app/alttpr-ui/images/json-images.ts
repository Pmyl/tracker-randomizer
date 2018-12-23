import { SwordState } from 'src/app/alttpr/ids/SwordState';
import { DungeonReward } from 'src/app/alttpr/ids/DungeonReward';
import { DungeonEntranceItem } from 'src/app/alttpr/ids/DungeonEntranceItem';
import { ImageRepository } from 'src/app/core-ui/image-repository/image-repository';
import { Item } from 'src/app/alttpr/ids/Item';
import { Dungeon } from 'src/app/alttpr/ids/Dungeon';
import { Injectable } from '@angular/core';
import { ImagesService } from './base/images-service';

@Injectable()
export class JsonImages implements ImagesService {
  private _imageRepo: ImageRepository;
  private _filename: string;

  constructor(imageRepo: ImageRepository, filename: string) {
    this._imageRepo = imageRepo;
    this._filename = filename;
  }

  public async setImagesInRepository(): Promise<void> {
    const images: { [key: string]: string } = await (await fetch(this._filename)).json();

    Object.keys(images).forEach(id => {
      this._imageRepo.addImage(id, images[id]);
    });
  }
}