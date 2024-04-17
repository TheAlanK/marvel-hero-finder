import { Injectable } from '@angular/core';
import { openDB } from 'idb';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  private dbPromise;

  constructor() {
    this.dbPromise = openDB('searchHistoryDB', 1, {
      upgrade(db) {
        db.createObjectStore('searches', { autoIncrement: true });
      },
    });
  }

  async addSearch(term: string): Promise<void> {
    const db = await this.dbPromise;
    const tx = db.transaction('searches', 'readwrite');
    await tx.store.add(term);
    await tx.done;
  }

  async getSearches(): Promise<string[]> {
    const db = await this.dbPromise;
    return db.getAll('searches');
  }
}
