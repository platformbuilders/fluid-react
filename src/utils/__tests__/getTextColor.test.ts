import theme from '../../theme';
import { getTextColor } from '../index';

describe('test getTextColor', () => {
  test('should return text colors primary contrast when no variant specified', () => {
    const color = getTextColor({ theme });
    expect(color).toBe(theme.brand.primary.contrast);
  });
  test('should return text colors primary', () => {
    const color = getTextColor({ theme, variant: 'primary' });
    expect(color).toBe(theme.brand.primary.contrast);
  });
  test('should return text colors secondary', () => {
    const color = getTextColor({ theme, variant: 'secondary' });
    expect(color).toBe(theme.brand.secondary.contrast);
  });
  test('should return text colors accent', () => {
    const color = getTextColor({ theme, variant: 'accent' });
    expect(color).toBe(theme.brand.accent.contrast);
  });
  test('should return text colors flat', () => {
    const color = getTextColor({ theme, variant: 'flat' });
    expect(color).toBe(theme.brand.primary.main);
  });
  test('should return text colors info', () => {
    const color = getTextColor({ theme, variant: 'info' });
    expect(color).toBe(theme.info.contrast);
  });
  test('should return text colors danger', () => {
    const color = getTextColor({ theme, variant: 'danger' });
    expect(color).toBe(theme.danger.contrast);
  });
  test('should return text colors warning', () => {
    const color = getTextColor({ theme, variant: 'warning' });
    expect(color).toBe(theme.warning.contrast);
  });
  test('should return text colors invert', () => {
    const color = getTextColor({ theme, variant: 'invert' });
    expect(color).toBe(theme.brand.primary.main);
  });
  test('should return primary contrast whenever disabled', () => {
    const color = getTextColor({ theme, variant: 'invert', disabled: true });
    expect(color).toBe(theme.brand.primary.contrast);
  });
});
