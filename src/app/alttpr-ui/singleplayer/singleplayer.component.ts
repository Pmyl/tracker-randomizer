import { Component, OnInit, HostListener } from '@angular/core';
import { IConfigurationFetcher } from 'src/app/configuration/base/configuration-fetcher';
import { IConfiguration } from 'src/app/core/configuration/base/Configuration';

@Component({
  selector: 'singleplayer',
  templateUrl: './singleplayer.component.html',
  styleUrls: ['./singleplayer.component.scss']
})
export class SingleplayerComponent implements OnInit {
  public config: IConfiguration;

  @HostListener('window:keyup.r')
  public async getNewConfig(): Promise<void> {
    this.config = await this._configRepository.getConfig();
  }

  private _configRepository: IConfigurationFetcher;

  constructor(configuration: IConfigurationFetcher) {
    this._configRepository = configuration;
  }

  public async ngOnInit() {
    this.getNewConfig();
  }
}
