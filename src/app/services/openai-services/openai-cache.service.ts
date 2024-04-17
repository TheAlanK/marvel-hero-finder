import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';

interface OpenAICacheDB {
  'openai-cache': {
    key: string;
    value: {
      response: any;
      timestamp: number;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class OpenAICacheService {
  private dbPromise: Promise<IDBPDatabase<OpenAICacheDB>>;

  constructor() {
    this.dbPromise = openDB<OpenAICacheDB>('openaiCacheDB', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('openai-cache')) {
          db.createObjectStore('openai-cache', { keyPath: 'key' });
        }
      },
    });
  }

  public async setCache(heroName: string, response: any): Promise<void> {
    const db = await this.dbPromise;
    const tx = db.transaction('openai-cache', 'readwrite');
    const store = tx.objectStore('openai-cache');
    const data = await store.get(heroName);
    if (!data) {
      await store.put({
        key: heroName,
        response: response,
        timestamp: Date.now(),
      });
    }
    await tx.done;
  }

  public async getCache(heroName: string): Promise<any> {
    const db = await this.dbPromise;
    const data = await db.get('openai-cache', heroName);
    if (!data) {
      return undefined;
    }
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    if (data.timestamp < thirtyDaysAgo) {
      await this.deleteCache(heroName);
      return undefined;
    }
    return data.response;
  }

  public async deleteCache(heroName: string): Promise<void> {
    const db = await this.dbPromise;
    const tx = db.transaction('openai-cache', 'readwrite');
    await tx.store.delete(heroName);
    await tx.done;
  }

}
