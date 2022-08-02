import { getRandomIndex, getRandomInt, getRandomIntVec } from "./randUtil"

describe("getRandomInt", () => {
  it("pick 0", () => Array.from(Array(100)).forEach(() => {
    const value = getRandomInt(0, 1);
    expect(value).toEqual(0);
  }))
  it("pick 0~1", () => Array.from(Array(100)).forEach(() => {
    const value = getRandomInt(0, 2);
    expect(value).toBeLessThan(2);
    expect(value).toBeGreaterThanOrEqual(0);
  }))
  it("pick 100", () => Array.from(Array(100)).forEach(() => {
    const value = getRandomInt(100, 101);
    expect(value).toEqual(100);
  }))
  it("pick 100~101", () => Array.from(Array(100)).forEach(() => {
    const value = getRandomInt(100, 102);
    expect(value).toBeLessThan(102);
    expect(value).toBeGreaterThanOrEqual(100);
  }))
  it("Mean value test - can fail occationally", () => {
    const sum = Array.from(Array(1000)).reduce((accum, cur) => accum + getRandomInt(0, 2), 0)/1000;
    expect(sum).toBeGreaterThan(0.4);
    expect(sum).toBeLessThan(0.6);
  })
})

describe('getRandomIntVec', () => {
  it("", () => {
    const randvec = getRandomIntVec(3, 0, 1)
    expect(randvec).toEqual([0, 0, 0])  
  })
})

describe("getRandomIndex", () => {
  it("pick 0, length 1", () => Array.from(Array(100)).forEach(() => {
    expect(getRandomIndex([1])).toBe(0)
  }))
  it("pick 1, length 2", () => Array.from(Array(100)).forEach(() => {
    expect(getRandomIndex([0, 1])).toBe(1)
  }))
  it("pick 2, length 3", () => Array.from(Array(100)).forEach(() => {
    expect(getRandomIndex([0, 0, 1])).toBe(2)
  }))
  it("pick 0, length 2", () => Array.from(Array(100)).forEach(() => {
    expect(getRandomIndex([1, 0])).toBe(0)
  }))
  it("pick 0, length 3", () => Array.from(Array(100)).forEach(() => {
    expect(getRandomIndex([1, 0, 0])).toBe(0)
  }))
  it("pick 0 or 1, length 3", () => Array.from(Array(100)).forEach(() => {
    expect(getRandomIndex([0.5, 0.5, 0])).toBeLessThan(2)
  }))
  it("pick 1 or 2, length 3", () => Array.from(Array(100)).forEach(() => {
    expect(getRandomIndex([0, 0.5, 0.5])).toBeGreaterThan(0)
  }))

})
