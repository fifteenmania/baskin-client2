import { maskVecAsMin, vecFindMinIdx } from "./linarg"


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

describe("maskVecAsMin", () => {
  it("", () => {
    expect(maskVecAsMin([0, 0])).toEqual([0.5, 0.5])
  })
  it("", () => {
    expect(maskVecAsMin([0])).toEqual([1])
  })
  it("", () => {
    expect(maskVecAsMin([0, 1, 0])).toEqual([0.5, 0, 0.5])
  })
  it("", () => {
    expect(maskVecAsMin([0, 0, 0, 1, 0])).toEqual([0.25, 0.25, 0.25, 0, 0.25])
  })
  it("", () => {
    expect(maskVecAsMin([0.5, 0.3, 0.2, 0.2])).toEqual([0, 0, 0.5, 0.5])
  })
  it("", () => {
    expect(maskVecAsMin([1])).toEqual([1])
  })
})