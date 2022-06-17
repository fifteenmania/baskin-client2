import { useEffect, useState } from "react";
import BrowserStorage from "../class/BrowserStorage";
import BrowserStorageMapper from "../class/BrowserStorageMapper";

/**
 * 
 * @param key localStorage에서 사용할 state의 key 값
 * @param initialValue state의 초기값. localStorage에 저정된 초기값이 없으면 사용됨.
 * @param mapper string과 state의 값 간에 변환을 위한 BrowserStorageMapper 객체
 * @returns [state, setState]. state는 localStorage에 저장되는 상태, setState는 state update를 위한 함수.
 */
export default function useLocalStorage<K extends string, V>(key: K, initialValue: V, mapper: BrowserStorageMapper<V>) {
  const getStorage = () => window.localStorage;
  const browserStorage = new BrowserStorage<K, V>(getStorage, mapper)
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = browserStorage.get(key);
      return item? item : initialValue;
    } catch (error) {
      console.log(error)
      return initialValue;
    }
  })
  
  const setValue = (value: (V | ((prevVal: V) => V))) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      browserStorage.set(key, valueToStore);
    } catch (error) {
      console.log(error);
    }
  }

  return [storedValue, setValue] as const;
}