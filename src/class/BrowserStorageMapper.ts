export default interface BrowserStorageMapper<V> {
  // fromJson must handle null input
  fromJson(json: string | null): V | null
  toJson(target: V): string
}

export class BoolMapper implements BrowserStorageMapper<boolean> {
  fromJson(json: string | null): boolean | null {
    if (json === null) {
      return null
    }
    return JSON.parse(json)
  }
  toJson(target: boolean): string {
    return JSON.stringify(target)
  }
}

export class NumberMapper implements BrowserStorageMapper<number> {
  fromJson(json: string | null): number | null {
    if (json === null) {
      return null
    }
    const number = JSON.parse(json);
    if (typeof number === 'number') {
      return number
    }
    return null
  }
  toJson(target: number): string {
    return target.toString()
  }
}
