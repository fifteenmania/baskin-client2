/**
 * 
 * @param vec 입력 벡터입니다.
 * @returns `vec` 내부 값 중 최솟값입니다.
 */
 export function vecFindMin(vec: number[]): number {
  return vec.reduce((lowest, current) => lowest > current ? current : lowest, Infinity);
}

/**
 * 
 * @param vec 입력 벡터입니다.
 * @returns `vec` 내부에서 최솟값을 가지는 인덱스를 찾습니다. 최솟값이 여러 개일 경우 가장 처음의 값을 반환합니다.
 */
export function vecFindMinIdx(vec: number[]): number {
  return vec.reduce((lowestIdx, current, idx) => current < vec[lowestIdx] ? idx : lowestIdx, 0);
}

/**
 * 
 * @param vec 입력 벡터입니다.
 * @param absTol 실수 비교 연산에서의 반올림 오차 허용값입니다. 차이가 이 값보다 크지 않을 경우 같은 값으로 취급합니다. 
 * @returns `vec`에서 최솟값을 가지는 인덱스에서만 양의 값을 가지는 벡터입니다. 내부 값은 1/(입력 벡터의 최솟값의 수) 입니다. 예를 들어 `vec`이 [0, 1, 0] 일 경우 [0.5, 0, 0.5]를 반홥합니다.
 */
export function maskVecAsMin(vec: number[], absTol = 1e-5) {
  const minVal = vecFindMin(vec);
  const mask = vec.map((current) => Math.abs(current - minVal) < absTol ? 1: 0)
  return vecNormalize(mask);
}

/**
* 
* @param len length of the output vector
* @returns unit vector of length `len`. [1, 0, 0, ..., 0]
*/
export function getUnitVec(len: number): number[] {
  const result = Array(len).fill(0);
  result[0] = 1;
  return result;
}

/**
* 
* @param vec input vector
* @returns cumulative sum of `vec`. ex) [1, 2, 3] => [1, 3, 6]
*/
export function vecCumSum(vec: number[]): number[] {
  return vec.map((sum => value => sum += value)(0));
}

/**
* 
* @param vec input vector
* @returns Shifted vector. Makes deep copy. ex) [1, 2, 3] => [3, 1, 2]. 
*/
export function vecShiftToLast(vec: number[]): number[] {
  if (vec.length <= 1) {
      return vec;
  }
  const copied = vec.slice(0, -1)
  copied.unshift(vec[vec.length - 1]);
  return copied
}

/**
* 
* @param mat input matrix
* @returns Row-wise shifted matrix. Makes deep copy.
*/
export function matShiftToLast(mat: number[][]): number[][] {
  return mat.map((row) => vecShiftToLast(row));
}

/**
* 
* @param vec input vector
* @returns normalized vector such that sum(vector) = 1.
*/
export function vecNormalize(vec: number[]): number[] {
  const sum = vec.reduce((accum, item) => accum + item, 0);
  return vec.map(x => x/sum);
}

/**
* 
* @param revArr reversed array
* @param startRow slice starting row index
* @param endRow slice ending row index
* @returns Slice reversed array as if it is normal. 
*      (noraml array).slice(startRow, endRow).reverse() = sliceRev((reversed array), startRow, endRow)
*/
export function sliceRev<T>(revArr: T[], startRow: number, endRow: number): T[] {
  const newStartRow = revArr.length - endRow;
  const newEndRow = revArr.length - startRow;
  return revArr.slice(newStartRow, newEndRow);
}

/**
* 
* @param mat input matrix
* @param colIdx column index to slice
* @returns sliced vector.
*/
export function matSliceCol(mat: number[][], colIdx: number): number[] {
  return mat.reduce((accum, row) => accum.concat(row[colIdx]), []);
}

// multiplication
/**
* 
* @param vec1 (1 x n) row vector
* @param vec2 (n X 1) column vector
* @returns (vec1 . vec2) = scalar
*/
export function vecVecDot(vec1: number[], vec2: number[]): number {
  return vec1.reduce((accum, value, idx) => accum + (value*vec2[idx]), 0);
}

/**
* 
* @param vec (1 x n) row vector.
* @param mat (n x m) matrix. Should be in row-major order.
* @returns (vec . mat) = (1 x m) row vector
*/
export function vecMatDot(vec: number[], mat: number[][]): number[] {
  return mat.reduce((accumRow, arrRow, rowIdx) => accumRow.map((colVal, colIdx) => colVal+arrRow[colIdx]*vec[rowIdx]), new Array(mat[0].length).fill(0))
}

/**
* 
* @param mat (n x m) matrix. Should be in row-major order.
* @param vec (m x 1) column vector.
* @returns (mat . vec) = (n x l) column vector
*/
export function matVecDot(mat: number[][], vec: number[]): number[] {
  return mat.map((vec2) => vecVecDot(vec2, vec));
}

// debug
export function matToString(mat: number[][]): string {
  return "[" + mat.map((x) => x.join(", ")).join("] [") + "]"
}
