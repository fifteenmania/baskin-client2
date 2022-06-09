import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import useDarkMode, { DarkModeMapper, DARK_MODE } from "./useDarkMode"
import useLocalStorage from "./useLocalStorage"

describe("dark mode mapper test", () => {
  it("standalone test", () => {
    const darkMapper = new DarkModeMapper()
    expect(darkMapper.fromJson(null)).toBe(null)
    expect(darkMapper.fromJson(DARK_MODE.DARK)).toBe(true)
    expect(darkMapper.fromJson(DARK_MODE.LIGHT)).toBe(false)
    expect(darkMapper.toJson(true)).toBe(DARK_MODE.DARK)
    expect(darkMapper.toJson(false)).toBe(DARK_MODE.LIGHT)
  })

  describe("useLocalStorage integrated test", () => {
    const darkMapper = new DarkModeMapper()
    it("default dark", () => {
      const {result} = renderHook(() => useLocalStorage("test", true, darkMapper))
      expect(result.current[0]).toBe(true)
      act(() => {
        result.current[1](false)
      })
      expect(result.current[0]).toBe(false)
    })
    
    it("default light", () => {
      const {result} = renderHook(() => useLocalStorage("test", false, darkMapper))
      expect(result.current[0]).toBe(false)
      act(() => {
        result.current[1](true)
      })
      expect(result.current[0]).toBe(true)
    })
  })
})



describe("hook tests without toggle", () => {
  it("default dark", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: '(prefers-color-scheme: dark)'.includes(query),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    }))
    const {result} = renderHook(() => useDarkMode())
    expect(result.current[0]).toBe(true)
  })
  
  it("default light", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    }))
    const {result} = renderHook(() => useDarkMode())
    expect(result.current[0]).toBe(false)
  })
})

describe("hook tests with toggle", () => {
  it("default dark", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: '(prefers-color-scheme: dark)'.includes(query),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    }))
    const {result} = renderHook(() => useDarkMode())
    expect(result.current[0]).toBe(true)
    act(() => {
      result.current[1](false)
    })
    expect(result.current[0]).toBe(false)
  })
})
