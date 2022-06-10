import { vecFindMinIdx } from "./linarg"


describe("vecFindMinIdx", () => {
  it("vecFindMinIdx", () => {
    expect(vecFindMinIdx([1, 2, 3])).toBe(0)
  })

  it("vecFindMinIdx", () => {
    expect(vecFindMinIdx([1])).toBe(0)
  })

  it("vecFindMinIdx", () => {
    expect(vecFindMinIdx([1, 2])).toBe(0)
  })

  it("vecFindMinIdx", () => {
    expect(vecFindMinIdx([1, 3, 0, 1])).toBe(2)
  })
})