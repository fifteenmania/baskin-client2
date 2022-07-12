import { useState } from "react";

/**
 * 
 * @returns 
 */
export default function useDisplayNumber() {
  const [count, setCount] = useState(0);
  const [activated, setActivated] = useState(false);
  // 정의될 API 목록
  // 1. 정해진 숫자까지 하나씩 세 나가는 애니메이션 제어
  // 2. 정해진 숫자를 계속 띄워놓기
  // 3. 숫자 표시 종료
  const countUp = () => setCount((count) => count + 1);
  const activate = () => setActivated(true);
  const deactivate = () => setActivated(false);
  return [activated? count : null, setCount, countUp, activate, deactivate] as const;
}

/**
 * 
 * @param numPlayer 
 * @returns [
 *  `displayNumbers`,
 *  `setDisplayNumbers`,
 *  `countUp`,
 *  `activate`,
 *  `deactivate`
 * ]
 */
export function useDisplayNumbers(numPlayer: number) {
  const [count, setCount] = useState<number[]>(Array.from({length: numPlayer}).fill(0) as number[]);
  const [limits, setLimits] = useState<number[]>(Array.from({length: numPlayer}).fill(0) as number[]);
  const [activated, setActivated] = useState<boolean[]>(Array.from({length: numPlayer}).fill(false) as boolean[]);
  const [endCallback, setEndCallback] = useState<() => void>();
  const setDisplayNumbers = (player: number, from: number, to: number, callback: () => void)  => {
    const newLimits = limits.map((limit, i) => i === player ? to : limit);
    const newCount = count.map((count, i) => i === player ? from : count);
    setLimits(newLimits);
    setCount(newCount);
    setEndCallback(callback);
  }
  const countUp = (player: number) => {
    if (count[player] >= limits[player]) {
      return endCallback? endCallback() : null;
    }
    const newCount = count.map((count, i) => i === player ? count + 1 : count);
    setCount(newCount);
  }
  const activate = (player: number) => setActivated((activated) => {
    const newActivated = activated.slice();
    newActivated[player] = true;
    return newActivated;
  })
  const deactivate = (player: number) => setActivated((activated) => {
    const newActivated = activated.slice();
    newActivated[player] = false;
    return newActivated;
  })
  return [count, activated, setDisplayNumbers, countUp, activate, deactivate] as const;
}