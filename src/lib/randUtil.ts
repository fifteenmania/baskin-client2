import { vecCumSum } from "./linarg";

/**
 * 
 * @param min Min value.
 * @param max Max value. Excluded.
 * @returns Random float in interval [`min`, `max`) 
 */
export function getRandom(min: number, max: number): number {
    return Math.random()*(max-min) + min;
}

/**
 * 
 * @param min Min value.
 * @param max Max value. Excluded.
 * @returns Random integer in interval [`min`, `max`).
 */
export function getRandomInt(min: number, max: number): number {
    return Math.floor(getRandom(Math.ceil(min), Math.floor(max)));
}

/**
 * `length`길이의 랜덤 정수로 구성된 배열을 반환합니다.
 * 정수는 구간 [`min`, `max`) 에서 임의 추출됩니다. 
 * @param length 배열의 길이
 * @param min 정수 최솟값
 * @param max 정수 최대값
 * @returns 생성된 랜덤 배열
 */
export function getRandomIntVec(length: number, min: number, max: number): number[] {
    return Array.from(Array(length)).map(() => getRandomInt(min, max));
}

/**
 * 
 * @param vec Input vector
 * @returns Random sample from the vector
 */
export function randomSampleOne(vec: number[]): number {
    const pickedIdx = getRandomInt(0, vec.length);
    return vec[pickedIdx];
}

/**
 * 
 * @param chooseProb normalized vector of choose probability
 * @returns random sample of index rate proportional to `vec`
 */
export function getRandomIntAsVec(chooseProb: number[]): number {
    const cumsum = vecCumSum(chooseProb);
    const rand = Math.random();
    var i = 0;
    var lower = 0;
    var upper = cumsum[i];
    while (i < cumsum.length) {
        if (rand >= lower && rand < upper) {
            return i;
        }
        i++;
        lower = cumsum[i-1];
        upper = cumsum[i];
    }
    throw new Error("invalid parameters");
}

/**
 * 
 * @param len length of the array
 * @returns `len` of array filled with random number
 */
export function randomArray(len: number): number[] {
    return Array.from(Array(len)).map((_) => Math.random());
}
