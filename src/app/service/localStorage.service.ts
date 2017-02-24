export class LocalStorageService {

  hasBrowserSupport(): boolean {
    return typeof(Storage) !== 'undefined';
  }
}
