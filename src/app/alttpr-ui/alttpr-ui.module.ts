import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DungeonTileComponent } from './dungeon-tile/dungeon-tile.component';
import { StandardComponent } from './standard/standard.component';
import { CoreUiModule } from '../core-ui/core-ui.module';
import { ALTTPRConfiguration } from '../alttpr/ALTTPR-configuration';
import { IConfigurationFetcher } from '../configuration/base/configuration-fetcher';
import { ConfigurationJsonFetcher } from '../configuration/json/configuration-json-fetcher';
import { DungeonTileParser } from '../alttpr/tiles/dungeon-tile-parser';
import { HardcodedImages } from './images/hardcoded-images';
import { ImagesService } from './images/base/images-service';
import { JsonImages } from './images/json-images';
import { ImageRepository } from '../core-ui/image-repository/image-repository';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { SingleplayerComponent } from './singleplayer/singleplayer.component';
import { MultiplayerService } from './multiplayer/service/multiplayer';
import { HardcodedMultiplayerService } from './multiplayer/service/hardcoded-multiplayer';
import { JsonMultiplayerService } from './multiplayer/service/json-multiplayer';
import { ILayoutFetcher } from '../core-ui/layout/fetcher/layout-fetcher';
import { JsonLayoutFetcher } from '../core-ui/layout/fetcher/json-layout';
import { TimerComponent } from './timer/timer.component';
import { LayoutTileItemComponent } from './layout-tile-item/layout-tile-item.component';
import { LayoutTileTwinComponent } from './layout-tile-twin/layout-tile-twin.component';

@NgModule({
  declarations: [
    TimerComponent,
    DungeonTileComponent,
    StandardComponent,
    MultiplayerComponent,
    SingleplayerComponent,
    LayoutTileItemComponent,
    LayoutTileTwinComponent
  ],
  imports: [
    CommonModule,
    CoreUiModule
  ],
  exports: [TimerComponent,
    DungeonTileComponent,
    SingleplayerComponent,
    MultiplayerComponent
  ],
  providers: [
    {
      provide: IConfigurationFetcher,
      useFactory: () => {
        const fetcher = new ConfigurationJsonFetcher('./assets/configuration/example.json');
        fetcher.addParser(new DungeonTileParser());

        return fetcher;
      }
    },
    {
      provide: ILayoutFetcher,
      useFactory: () => {
        return new JsonLayoutFetcher('./assets/configuration/example.layout.json');
      }
    },
    {
      provide: ImagesService,
      useFactory: (imageRepo: ImageRepository) => {
        return new JsonImages(imageRepo, './assets/configuration/example.images.json');
      },
      deps: [ImageRepository]
    },
    {
      provide: MultiplayerService,
      useFactory: () => {
        return new JsonMultiplayerService('./assets/configuration/example.multiplayer.json');
      }
    },
    // { provide: IConfigurationFetcher, useClass: ALTTPRConfiguration },
    // { provide: ImagesService, useClass: HardcodedImages },
    // { provide: MultiplayerService, useClass: HardcodedMultiplayerService }
  ]
})
export class AlttprUiModule {
  constructor(imagesService: ImagesService) {
    imagesService.setImagesInRepository();
  }
}
