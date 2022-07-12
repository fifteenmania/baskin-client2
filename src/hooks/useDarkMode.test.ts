import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import useDarkMode from "./useDarkMode"



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
