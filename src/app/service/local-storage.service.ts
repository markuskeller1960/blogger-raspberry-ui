import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  hasBrowserSupport(): boolean {
    return typeof(Storage) !== 'undefined';
  }

  storeObject(name: string, object: any) {
    if (this.hasBrowserSupport() && typeof(name) !== 'undefined' && typeof(object) !== 'undefined') {
      if (name.length > 0) {
        localStorage.setItem(name, JSON.stringify(object));
      }
    }
  }

  loadObject(name: string): any {
    let object = null;
    if (typeof(this.hasBrowserSupport() && typeof(name) !== 'undefined') && name.length > 0) {
      const rawValue = localStorage.getItem(name);
      if(typeof(rawValue) !== 'undefined') {
        object = JSON.parse(rawValue);
      }
    }
    return object;
  }

  removeObject(name: string) {
    if (typeof(this.hasBrowserSupport() && typeof(name) !== 'undefined') && name.length > 0) {
      localStorage.removeItem(name);
    }
  }

  clearStorage() {
    if (this.hasBrowserSupport()) {
      return localStorage.clear();
    }
  }
}
