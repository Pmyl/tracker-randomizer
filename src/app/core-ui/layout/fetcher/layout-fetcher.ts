import { ILayout } from '../layout';

export abstract class ILayoutFetcher {
    abstract getLayout(): Promise<ILayout>;
}