import { useEffect, useState } from "react";

/**
 * localStorage api wrapper. 다른 컴포넌트에서 값을 수정해도 자동으로 값을 업데이트함.
 * 일반적인 react state와 유사하게 localstorage 값을 사용하도록 해 줌.
 * @param key localStorage 에서 사용할 state의 key 값
 * @param initialValue state의 초기값. localStorage 에 이미 저장된 초기값이 있다면 무시됨.
 * @param valToString state 를 string 으로 변환하는 함수
 * @param stringToVal string 을 state 로 변환하는 함수
 * @returns [  
 *  `state`, // localStorage에 저장되는 상태  
 *  `setState` // state update를 위한 함수 (state: V) => void  
 * ]
 */
export default function useLocalStorage<T>(key: string, initialValue: T, valToString: (val: T) => string, stringToVal: (str: string) => T) {
  const storage = window.localStorage;
  const [value, setValue] = useState<T>(() => {
    try {
      const item = storage.getItem(key);
      return item? stringToVal(item) : initialValue;
    } catch (error) {
      console.error(error)
      return initialValue;
    }
  });

  const dispatchStorgeEvent = (oldValue: T, newValue: T) => {window.dispatchEvent(new StorageEvent('storage', {key, oldValue: valToString(oldValue), newValue: valToString(newValue)}))}

  const setSafeValue = (newVal: T) => {
    try {
      storage.setItem(key, valToString(newVal));
      dispatchStorgeEvent(value, newVal);
      setValue(newVal);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const handler = (event: StorageEvent) => {
      if (event.key === key) {
        if (event.newValue === null) {
          setValue(initialValue);
          return;
        }
        setValue(stringToVal(event.newValue));
      }
    }
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, [initialValue, key, stringToVal, valToString]);

  return [value, setSafeValue] as const;
}