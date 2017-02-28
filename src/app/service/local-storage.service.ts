import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  hasBrowserSupport(): boolean {
    return typeof(Storage) !== 'undefined';
  }

  storeObject(name: string, object: any) {
    if (this.hasBrowserSupport() && typeof(name) !== 'undefined' && typeof(object) !== 'undefined') {
      if (name.length > 0) {
        localStorage.setItem(name, object);
      }
    }
  }

  loadObject(name: string): any {
    if (typeof(this.hasBrowserSupport() && name) !== 'undefined' && name.length > 0) {
      return localStorage.getItem(name);
    }
    return null;
  }

  removeObject(name: string) {
    localStorage.removeItem(name);
  }
}
