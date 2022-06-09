import { BoolMapper, NumberMapper } from "./BrowserStorageMapper"

it('bool mapper test', () => {
  const boolMapper = new BoolMapper();
  expect(boolMapper.fromJson('true')).toBe(true)
  expect(boolMapper.fromJson('false')).toBe(false)
  expect(boolMapper.toJson(true)).toBe('true')
  expect(boolMapper.toJson(false)).toBe('false')
  expect(boolMapper.fromJson(null)).toBe(null)
})

it('number mapper test', () => {
  const numMapper = new NumberMapper();
  expect(numMapper.fromJson('1')).toBe(1)
  expect(numMapper.fromJson('0')).toBe(0)
  expect(numMapper.fromJson(null)).toBe(null)
  expect(numMapper.toJson(1)).toBe('1')
  expect(numMapper.fromJson('false')).toBe(null)
})

