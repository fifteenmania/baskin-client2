import { renderHook } from "@testing-library/react";
import usePrefersDarkMode from "./usePrefersDarkMode"

it("prefers dark", () => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query === "(prefers-color-scheme: dark)",
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  }))
  const {result} = renderHook(() => usePrefersDarkMode());
  expect(result.current).toBe(true)
})

it("prefers light", () => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query === "(prefers-color-scheme: light)",
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  }))
  const {result} = renderHook(() => usePrefersDarkMode());
  expect(result.current).toBe(false)
})

it("receive change", () => {

})