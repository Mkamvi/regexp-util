/**
* auhtor: iWuzhi
* date: 2020-05-06 14:48:32
*/

import { TRIM_PATTERN, TRIM_PATTERN_NORMAL } from './index';

describe('String Util Test', () => {

  describe('TRIM_PATTERN test', () => {
    it('<231131 > should trim to <231131>', () => {
      expect('  231131 '.replace(TRIM_PATTERN, '$1')).toBe('231131');
    });
    it('<  231131> should trim to <231131>', () => {
      expect('  231131 '.replace(TRIM_PATTERN, '$1')).toBe('231131');
    });
    it('<  231131  > should trim to <231131>', () => {
      expect('  231131 '.replace(TRIM_PATTERN, '$1')).toBe('231131');
    });
  })

  describe('TRIM_PATTERN_NORMAL test', () => {
    it('<231131 > should trim to <231131>', () => {
      expect('  231131'.replace(TRIM_PATTERN_NORMAL, '')).toBe('231131');
    });
    it('<     231131> should trim to <231131>', () => {
      expect('     231131'.replace(TRIM_PATTERN_NORMAL, '')).toBe('231131');
    });
    it('<   231131   > should trim to <231131>', () => {
      expect('   231131   '.replace(TRIM_PATTERN_NORMAL, '')).toBe('231131');
    });
  })
})