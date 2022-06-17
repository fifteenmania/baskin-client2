import { getFullLoseProbMat } from "../lib/strategy"
import GameSetting from "../typedef/GameSetting"
import { getNextCall } from "./useStrategy";

function getNextCallHelper(setting: TestSetting) {
  const loseProbMat = getFullLoseProbMat(setting.numPlayer, setting.maxCall, setting.numEnd);
  return getNextCall(loseProbMat, setting.maxCall, setting.currentNum);
}

interface TestSetting extends GameSetting{
  currentNum: number
}

const setting1: GameSetting = {
  numPlayer: 3,
  numEnd: 31,
  maxCall: 3,
  myOrder: 0
}

const setting2: GameSetting = {
  numPlayer: 2,
  numEnd: 31,
  maxCall: 3,
  myOrder: 1
}


describe("getNextCall test", () => {
  it("easy case 1", () => {
    const testSetting1 = {...setting1, currentNum: 30}
    const nextCall = getNextCallHelper(testSetting1);
    expect(nextCall).toBe(31);
  })
  it("easy case 2", () => {
    const testSetting1 = {...setting1, currentNum: 29}
    const nextCall = getNextCallHelper(testSetting1);
    expect(nextCall).toBeGreaterThan(28)
    expect(nextCall).toBeLessThan(31)
  })
  it("easy case 3", () => {
    const testSetting1 = {...setting1, currentNum: 27}
    const nextCall = getNextCallHelper(testSetting1);
    expect(nextCall).toBeGreaterThan(28)
    expect(nextCall).toBeLessThan(31)
  })
  it("easy case 4", () => {
    const testSetting1 = {...setting1, currentNum: 26}
    const nextCall = getNextCallHelper(testSetting1);
    expect(nextCall).toBe(29)
  })
})
