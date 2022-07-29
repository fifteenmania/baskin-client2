import { getUnitVec, matShiftToLast, vecFindMin, vecMatDot, vecNormalize} from "./linarg";
import { getRandomIndex } from "./randUtil";

/**
 * 
 * @param loseVec Lose rate of available choices. Act as a minimization objective. 
 *      - ex. [.1, .2, .7] : lose rate .1 after calling 1 number,
 *      lose rate .2 after calling 2 number,
 *      lose rate .7 after calling 3 number. 
 *      Thus, AI will call 3 numbers.
 * @param options Optional settings
 * @param options.absTol 반올림 오차를 보정하기 위한 허용 오차 수준
 * @returns 각 선택지에 대한 최적 선택 확률. 최적 선택지가 여러 개라면 그들을 동일한 확률로 선택.
 */
export function getChooseProb(loseVec: number[], {absTol=10e-5}: {absTol?: number} = {}): number[] {
    const lowest = vecFindMin(loseVec);
    const check = loseVec.map((x) => Math.abs(x - lowest) < absTol ? 1: 0);
    const result = vecNormalize(check);
    return result;
}

/**
 * 사전 계산된 패배 확률 행렬 `loseMat` 을 인자로 받습니다. `loseMat`에서 플레이어가 선택할 수 있는 숫자 범위만 슬라이스하여 반환합니다.
 * @param loseMat 패배 확률 행렬
 * @param maxCall 최대 부르는 갯수
 * @param currentNum 현재 숫자
 * @returns 슬리이스된 패배 확률 행렬
 */
export function getLookupMat(loseMat: number[][], maxCall: number, currentNum: number): number[][] {
    const startRow = currentNum+1;
    const endRow = currentNum+maxCall+1;
    const lookupMat = loseMat.slice(startRow, endRow);
    return lookupMat;
}

/**
 * `loseMat`에서 역순으로 구성된 패배 확률 행렬을 인자로 받습니다. `loseMat`에서 플레이어가 선택할 수 있는 숫자 범위만 슬라이스하여 반환합니다.
 * @param loseMat 패배 확률 행렬
 * @param maxCall 최대 부르는 갯수
 * @param currentNum 현재 숫자
 * @param numEnd 끝 숫자
 * @returns 슬라이스된 패배 확률 행렬
 */
export function getLookupMatRev(loseMat: number[][], maxCall: number, currentNum: number, numEnd: number) {
    const currentIdx = numEnd - currentNum;
    const endRow = Math.max(currentIdx, 0);
    const startRow = Math.max(currentIdx - maxCall, 0);
    const lookupMat = loseMat.slice(startRow, endRow);
    return lookupMat;
}

/**
 * 사전 계산된 패배 확률 행렬 `loseMat`을 기반으로, 플레이어의 각 선택지에 대한 패배 확률을 반환합니다.
 * @param loseMat 패배 확률 행렬
 * @param maxCall 최대 부르는 갯수
 * @param currentNum 현재 숫자
 * @returns 각 선택지에 대한 패배 확률
 */
export function getLoseVec(loseMat: number[][], maxCall: number, currentNum: number): number[] {
    const lookupMat = getLookupMat(loseMat, maxCall, currentNum)
    const loseVec = lookupMat.map((loseMatRow) => loseMatRow[0]) 
    return loseVec
}

/**
 * 역순으로 구성된 패배 확률 행렬 `loseMat`을 기반으로, 플레이어의 각 선택지에 대한 패배 확률을 반환합니다.
 * @param loseMat 패배 확률 행렬
 * @param maxCall 최대 부르는 갯수
 * @param currentNum 현재 숫자
 * @param numEnd 끝 숫자
 * @returns 
 */
export function getLoseVecRev(loseMat: number[][], maxCall: number, currentNum: number, numEnd: number): number[] {
    const lookupMat = getLookupMatRev(loseMat, maxCall, currentNum, numEnd);
    const loseVec = lookupMat.map((loseMatRow) => loseMatRow[0])
    return loseVec;
}

/**
 * 
 * @param numPlayer Number of players
 * @param maxCall Maximam number of numbers player can call on his turn.
 * @param numEnd Final number of the game.
 * @returns ((`numEnd` + 1) x (`numPlayer`)) lose probability matrix. 
 */
export function getFullLoseProbMat(numPlayer: number, maxCall: number, numEnd: number): number[][] {
    const loseMat = [];
    const initial = getUnitVec(numPlayer);
    loseMat.push(initial);
    for (var currentNum=numEnd-1; currentNum>=0; currentNum--) {
        const lookupMat = getLookupMatRev(loseMat, maxCall, currentNum, numEnd);
        
        const loseVec = lookupMat.map((lookupMatRow) => lookupMatRow[0]);
        const chooseProb = getChooseProb(loseVec);

        const lookupMatShifted = matShiftToLast(lookupMat);
        const nextLoseVec = vecMatDot(chooseProb, lookupMatShifted);
        loseMat.push(nextLoseVec);
    }
    return loseMat.reverse();
}

/**
 * 최적의 다음 선택을 찾아서 반환합니다.
 * @param loseMat 
 * @param currentNum 
 * @param maxCall 
 * @param numEnd 
 * @returns 
 */
export function getNextCall(loseMat: number[][], currentNum: number, maxCall: number, numEnd: number): number {
    const loseVec = getLoseVecRev(loseMat, maxCall, currentNum, numEnd);
    const chooseProb = getChooseProb(loseVec);
    const nextCall = getRandomIndex(chooseProb);
    return currentNum + nextCall + 1;
}
