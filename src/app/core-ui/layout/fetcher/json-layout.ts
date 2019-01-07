import { ILayoutFetcher } from './layout-fetcher';
import { ILayout } from '../layout';

interface ILayoutJson {
    tiles: Array<string>;
}

export class JsonLayoutFetcher implements ILayoutFetcher {
    private _jsonPath: string;

    constructor(jsonPath: string) {
        this._jsonPath = jsonPath;
    }

    public async getLayout(): Promise<ILayout> {
        const layoutJson: ILayoutJson = await (await fetch(this._jsonPath)).json();

        const layout: ILayout = {
            tilesOrder: layoutJson.tiles
        };

        return layout;
    }
}