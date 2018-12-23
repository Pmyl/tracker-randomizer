import { SwordState } from 'src/app/alttpr/ids/SwordState';
import { DungeonReward } from 'src/app/alttpr/ids/DungeonReward';
import { DungeonEntranceItem } from 'src/app/alttpr/ids/DungeonEntranceItem';
import { ImageRepository } from 'src/app/core-ui/image-repository/image-repository';
import { Item } from 'src/app/alttpr/ids/Item';
import { Dungeon } from 'src/app/alttpr/ids/Dungeon';
import { Injectable } from '@angular/core';
import { ImagesService } from './base/images-service';

@Injectable()
export class HardcodedImages implements ImagesService {
  private _imageRepo: ImageRepository;

  constructor(imageRepo: ImageRepository) {
    this._imageRepo = imageRepo;
  }

  public setImagesInRepository(): Promise<void> {
    this._imageRepo.addImages({
      [SwordState.NotFound]: '../assets/images/sword.png',
      [SwordState.Hero]: '../assets/images/sword.png',
      [SwordState.Master]: '../assets/images/MasterSword.png',
      [SwordState.Tempered]: '../assets/images/TemperedSword.png',
      [SwordState.Gold]: '../assets/images/GoldenSword.png'
    });

    this._imageRepo.addImages({
      [DungeonReward.Unknown]: '../assets/images/reward_unknown.png',
      [DungeonReward.Pendant]: '../assets/images/pendant.png',
      [DungeonReward.GreenPendant]: '../assets/images/green_pendant.png',
      [DungeonReward.Crystal]: '../assets/images/crystal.png',
      [DungeonReward.RedCrystal]: '../assets/images/red_crystal.png'
    });

    this._imageRepo.addImages({
      [DungeonEntranceItem.Unknown]: '../assets/images/reward_unknown.png',
      [DungeonEntranceItem.Bombos]: '../assets/images/bombos.png',
      [DungeonEntranceItem.Ether]: '../assets/images/ether.png',
      [DungeonEntranceItem.Quake]: '../assets/images/quake.png'
    });

    this._imageRepo.addImages({
      [Item.BlueBoomerang]: '../assets/images/blue_boomerang.png',
      [Item.Bow]: '../assets/images/bow.png'
    });

    this._imageRepo.addImages({
      [Dungeon.MiseryMire]: '../assets/images/misery_mire.png',
      [Dungeon.EasternPalace]: '../assets/images/eastern_palace.png'
    });

    return Promise.resolve();
  }
}