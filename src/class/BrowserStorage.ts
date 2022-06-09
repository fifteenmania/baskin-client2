import BrowserStorageMapper from "./BrowserStorageMapper";

type LocalStorage = typeof window.localStorage;

export default class BrowserStorage<K extends string, V> {
  /* 
    localStorage wrapper class for type safety
    reference: https://betterprogramming.pub/creating-localstorage-wrapper-with-typescript-7ff6b71b35cb
  */
  private readonly storage: LocalStorage;
  private readonly mapper: BrowserStorageMapper<V>;
  constructor(getStorage: () => LocalStorage, mapper: BrowserStorageMapper<V>) {
    this.storage = getStorage();
    this.mapper = mapper;
    if (this.storage === undefined) {
      console.warn("storage object is undefined. used mapper:", mapper)
    }
  }

  get(key: K): V | null {
    if (this.storage === undefined) {
      return null
    }
    try {
      const item = this.storage.getItem(key);
      return this.mapper.fromJson(item);
    } catch (error) {
      return null;
    }
  } 

  set(key: K, value: V): void {
    if (this.storage === undefined) {
      return
    }
    this.storage.setItem(key, this.mapper.toJson(value))
  }

  clear() {
    this.storage.clear()
  }
}
