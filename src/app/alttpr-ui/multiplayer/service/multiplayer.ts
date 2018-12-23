export abstract class MultiplayerService {
  public abstract getAllCommonSelects(): Promise<Array<string>>;
  public abstract getAllCommonActivables(): Promise<Array<string>>;
}