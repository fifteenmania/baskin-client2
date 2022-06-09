import BrowserStorage from "./BrowserStorage";
import 'mock-local-storage';
import { BoolMapper, NumberMapper } from "./BrowserStorageMapper";

describe(("bool mapper tests"), () => {
  const testBoolMapper = new BoolMapper();
  it("bool mapper io tests", () => {
    const getStorage = () => global.localStorage;
    const browserStorage = new BrowserStorage(getStorage, testBoolMapper);
    expect(browserStorage.get("test")).toBe(null)
    browserStorage.set("test", true)
    expect(browserStorage.get("test")).toBe(true)
    browserStorage.set("test", false)
    expect(browserStorage.get("test")).toBe(false)
  })
  
  it("multiple bool mapper io tests", () => {
    const getStorage = () => global.localStorage;
    const browserStorage = new BrowserStorage(getStorage, testBoolMapper);
    browserStorage.set("test1", true)
    browserStorage.set("test2", false)
    expect(browserStorage.get("test1")).toBe(true)
    expect(browserStorage.get("test2")).toBe(false)
    browserStorage.set("test3", false)
    expect(browserStorage.get("test3")).toBe(false)
    browserStorage.set("test1", false)
    expect(browserStorage.get("test1")).toBe(false)
  })
})




