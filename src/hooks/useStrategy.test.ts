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

const testSetting1: TestSetting = {
  numPlayer: 3,
  numEnd: 31,
  maxCall: 3,
  myOrder: 3,
  currentNum: 30
}

describe("getNextCall test", () => {
  it("easy case 1", () => {
    const nextCall = getNextCallHelper(testSetting1);
    expect(nextCall).toBe(31)
  })
})
