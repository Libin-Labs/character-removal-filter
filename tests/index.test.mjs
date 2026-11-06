import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('removes selected characters', () => {
  assert.equal(api.removeCharacters('banana', 'an'), 'b');
});
test('keeps unlisted characters', () => {
  assert.equal(api.removeCharacters('hello', 'x'), 'hello');
});
test('removes supplementary code point', () => {
  assert.equal(api.removeCharacters('a😀b', '😀'), 'ab');
});
test('handles empty removal set', () => {
  assert.equal(api.removeCharacters('abc', ''), 'abc');
});
test('handles empty text', () => {
  assert.equal(api.removeCharacters('', 'a'), '');
});
test('rejects non-string set', () => {
  assert.throws(() => api.removeCharacters('x', 2), TypeError);
});
