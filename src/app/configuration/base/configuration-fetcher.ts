import { IConfiguration } from '../../core/configuration/base/Configuration';

export abstract class IConfigurationFetcher {
    public abstract getConfig(): Promise<IConfiguration>;
}