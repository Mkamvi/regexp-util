/**
 * author iWuzhi
 * date 2020-05-10 15:54:00
 */

import { IP_V4, EMAIL, INTEGER, LETTER_FIRSR } from './';

 describe("NowCoderPratice test", () => {
   
  describe("NowCoderPratice.IP_V4", () => {
    it("255.0.255.112 should be true", () => {
      expect(IP_V4.test('255.0.255.112')).toBe(true);
    });
    it("255.0.255.031 should be false", () => {
      expect(IP_V4.test('255.0.255.031')).toBe(false);
    });
    it("192.168.1.1 should be true", () => {
      expect(IP_V4.test('192.168.1.1')).toBe(true);
    });
    it("192.168.1 should be false", () => {
      expect(IP_V4.test('192.168.1')).toBe(false);
    });
  });

  describe("NowCoderPratice.EMAIL", () => {
    it("iwuzhi@gmail.com should be true", () => {
      expect(EMAIL.test('iwuzhi@gmail.com')).toBe(true);
    });
    it("iwuzhigmail.com should be true", () => {
      expect(EMAIL.test('iwuzhigmail.com')).toBe(false);
    });
  });

  describe('NowCoderPratice.INTEGER', () => {
    it('11 should be integer', () => {
      expect(INTEGER.test('11')).toBe(true);
    });
    it('-11 should be integer', () => {
      expect(INTEGER.test('-11')).toBe(true);
    });
    it('0 should be integer', () => {
      expect(INTEGER.test('0')).toBe(true);
    });
    it('x should be integer', () => {
      expect(INTEGER.test('x')).toBe(false);
    });
  });

  describe('NowCoderPratice.LETTER_FIRSR', () => {
    it('a31e should be true', () => {
      expect(LETTER_FIRSR.test('a31e')).toBe(true);
    });
    it('A31e should be true', () => {
      expect(LETTER_FIRSR.test('A31e')).toBe(true);
    });
    it('3A31e should be true', () => {
      expect(LETTER_FIRSR.test('3A31e')).toBe(false);
    });
    it('A3_1e should be true', () => {
      expect(LETTER_FIRSR.test('A3_1e')).toBe(false);
    });
  });

})