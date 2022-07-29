import { getChooseProb, getFullLoseProbMat, getLookupMat, getLookupMatRev, getLoseVec, getLoseVecRev, getNextCall } from "./strategy"

describe("getChooseProb", () => {
  it("[1] => [1]", () => {
      expect(getChooseProb([1])).toEqual([1])
  })
  it("[0] => [1]", () => {
      expect(getChooseProb([0])).toEqual([1])
  })
  it("[1, 0] => [0, 1]", () => {
      expect(getChooseProb([1, 0])).toEqual([0, 1])
  })
  it("[1, 0, 0] => [0, 1/2, 1/2]", () => {
      expect(getChooseProb([1, 0, 0])).toEqual([0, 1/2, 1/2])
  })
  it("[1, 0, 0, 0] => [0, 1/3, 1/3, 1/3]", () => {
      expect(getChooseProb([1, 0, 0, 0])).toEqual([0, 1/3, 1/3, 1/3])
  })
})

describe("getLookupMat", () => {
  it("zero length", () => {
    expect(getLookupMat([[1]], 1, 0)).toEqual([])
  })
  it("one length", () => {
    expect(getLookupMat([[1, 0], [0, 1]], 1, 0)).toEqual([[0, 1]])
  })
  it("two length", () => {
    expect(getLookupMat([[1, 0], [0, 1], [0, 1]], 2, 0)).toEqual([[0, 1], [0, 1]])
  })
})

describe("getLookupMatRev", () => {
  it("", () => {
      expect(getLookupMatRev([[1, 0], [0, 1]], 2, 30, 31)).toEqual([[1, 0]])
  })
  it("", () => {
      expect(getLookupMatRev([[1, 0], [0, 1]], 2, 29, 31)).toEqual([[1, 0], [0, 1]])
  })
  it("", () => {
      expect(getLookupMatRev([[1, 0, 0], [0, 1, 0]], 2, 29, 31)).toEqual([[1, 0, 0], [0, 1, 0]])
  })
})

describe("getLoseVec", () => {
  it("", () => {
      expect(getLoseVec([[1], [0]], 1, 0)).toEqual([0])
  })
  it("", () => {
      expect(getLoseVec([[1, 0], [1, 0]], 1, 0)).toEqual([1])
  })
  it("", () => {
      expect(getLoseVec([[1], [0], [1]], 2, 0)).toEqual([0, 1])
  })
  it("", () => {
      expect(getLoseVec([[1], [0], [1], [1]], 2, 0)).toEqual([0, 1])
  })
  it("", () => {
      expect(getLoseVec([[1], [0], [1], [1]], 3, 0)).toEqual([0, 1, 1])
  })
  it("", () => {
      expect(getLoseVec([[1], [0], [1], [1]], 4, 0)).toEqual([0, 1, 1])
  })
  it("", () => {
      expect(getLoseVec([[1, 0], [0, 1], [0.5, 0.5], [0, 1], [1, 0]], 2, 1)).toEqual([0.5, 0])
  })
  it("", () => {
      expect(getLookupMat([[1, 0, 0, 0]], 2, 0)).toEqual([])
  })
})

describe("getLoseVecRev", () => {
  it("", () => {
      expect(getLoseVecRev([[1, 0], [0, 1]], 2, 30, 31)).toEqual([1])
  })
  it("", () => {
      expect(getLoseVecRev([[1, 0], [0, 1]], 2, 29, 31)).toEqual([1, 0])
  })
  it("", () => {
      expect(getLoseVecRev([[1, 0, 0], [0, 1, 0]], 2, 29, 31)).toEqual([1, 0])
  })
})

describe("getFullLoseProbMat", () => {
  function getMessage(numPlayer: number, maxCount: number, numEnd: number) {
      return `numPlayer: ${numPlayer}, maxCount: ${maxCount}, numEnd: ${numEnd}`
  }
  it(getMessage(2, 2, 1), () => {
      expect(getFullLoseProbMat(2, 2, 1)).toEqual([[1, 0], [0, 1]].reverse())
  })
  it(getMessage(2, 3, 4), () => {
      const result = getFullLoseProbMat(2, 3, 4)
      expect(result.length).toEqual(5)
      expect(result).toEqual([[1, 0], [0, 1], [1, 0], [1, 0], [1, 0]].reverse())
  })
  it(getMessage(2, 2, 4), () => {
      expect(getFullLoseProbMat(2, 2, 4)).toEqual([[1, 0], [0, 1], [1, 0], [1, 0], [0, 1]].reverse())
  })
  it(getMessage(2, 2, 6), () => {
      expect(getFullLoseProbMat(2, 2, 6)).toEqual([[1, 0], [0, 1], [1, 0], [1, 0], [0, 1], [1, 0], [1, 0]].reverse())
  })
  it(getMessage(3, 2, 3), () => {
      expect(getFullLoseProbMat(3, 2, 3)).toEqual([[1, 0, 0], [0, 1, 0], [0, 0, 1], [1/2, 0, 1/2]].reverse())
  })
  it(getMessage(3, 3, 4), () => {
      expect(getFullLoseProbMat(3, 3, 4)).toEqual([[1, 0, 0], [0, 1, 0], [0, 0, 1], [1/2, 0, 1/2], [1/2, 0, 1/2]].reverse())
  })
})

describe("getNextCall", () => {
  it("zero length", () => {
    
  })
})