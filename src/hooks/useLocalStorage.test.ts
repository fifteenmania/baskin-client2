import { act, renderHook } from "@testing-library/react";
import { BoolMapper } from "../class/BrowserStorageMapper";
import useLocalStorage from "./useLocalStorage";

// using react hooks testing library
// https://react-hooks-testing-library.com/installation

describe("bool mapper test", () => {
  const mapper = new BoolMapper()
  it("bool toggle test", () => {
    const {result} = renderHook(() => useLocalStorage("test", true, mapper))
    // initial value = true
    expect(result.current[0]).toBe(true)
    act(() => result.current[1](false))
    // toggled value = false
    expect(result.current[0]).toBe(false)
  })
  it("bool initial value false", () => {
    const {result} = renderHook(() => useLocalStorage("test", false, mapper))
    expect(result.current[0]).toBe(false)
    act(() => result.current[1](true))
    expect(result.current[0]).toBe(true)
  })  
})
