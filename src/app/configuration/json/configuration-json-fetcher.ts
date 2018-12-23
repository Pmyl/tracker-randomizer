import { IConfigurationFetcher } from '../base/configuration-fetcher';
import { IConfiguration } from '../../core/configuration/base/Configuration';
import { ConfigurationBuilder } from '../../core/configuration/ConfigurationBuilder';
import { ITileParser } from './parsers/base/tile-parser';
import { ActivableTileParser } from './parsers/activable-tile-parser';
import { SelectTileParser } from './parsers/select-tile-parser';
import { CountTileParser } from './parsers/count-tile-parser';

export class ConfigurationJsonFetcher implements IConfigurationFetcher {
    private _filename: string;
    private _parsersMap: { [key: string]: ITileParser } = {
        Activable: new ActivableTileParser(),
        Count: new CountTileParser(),
        Select: new SelectTileParser()
    }

    constructor(filename: string) {
        this._filename = filename;
    }

    public addParser(parser: ITileParser): void {
        this._parsersMap[parser.type] = parser;
    }

    public async getConfig(): Promise<IConfiguration> {
        const json: { tiles: Array<any>; } = await (await fetch(this._filename)).json();
        const builder = new ConfigurationBuilder();
        
        json.tiles.forEach((item) => {
            const parser: ITileParser = this._findParserFor(item.type);
            builder.addItems(parser.parse(item));
        });

        return builder.build();
    }

    private _findParserFor(type: string): ITileParser {
        if (!this._parsersMap[type])
            throw new Error(`Parser not found for tile type ${type}`);

        return this._parsersMap[type];
    }
}
