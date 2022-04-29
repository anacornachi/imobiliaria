import {capitalize} from '../capitalize';

test('should return a capitalized string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
