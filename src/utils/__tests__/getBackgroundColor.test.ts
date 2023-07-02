import theme from '../../theme';
import { getBackgroundColor } from '../index';

describe('test getBackgroundColor', () => {
  test('should return background colors primary no variant specified', () => {
    const color = getBackgroundColor({ theme });
    expect(color).toBe(theme.brand.primary.main);
  });
  test('should return background colors primary', () => {
    const color = getBackgroundColor({ theme, variant: 'primary' });
    expect(color).toBe(theme.brand.primary.main);
  });
  test('should return background color secondary', () => {
    const color = getBackgroundColor({
      theme,
      variant: 'secondary',
    });
    expect(color).toBe(`${theme.brand.secondary.main}`);
  });
  test('should return background color accent', () => {
    const color = getBackgroundColor({
      theme,
      variant: 'accent',
    });
    expect(color).toBe(`${theme.brand.accent.main}`);
  });
  test('should return background color danger', () => {
    const color = getBackgroundColor({
      theme,
      variant: 'danger',
    });
    expect(color).toBe(`${theme.danger.main}`);
  });
  test('should return background color warning', () => {
    const color = getBackgroundColor({
      theme,
      variant: 'warning',
    });
    expect(color).toBe(`${theme.warning.main}`);
  });
  test('should return background color info', () => {
    const color = getBackgroundColor({
      theme,
      variant: 'info',
    });
    expect(color).toBe(`${theme.info.main}`);
  });
  test('should return background color flat', () => {
    const color = getBackgroundColor({
      theme,
      variant: 'flat',
    });
    expect(color).toBe(`transparent`);
  });
  test('should return background color invert', () => {
    const color = getBackgroundColor({
      theme,
      variant: 'invert',
    });
    expect(color).toBe(`${theme.brand.primary.contrast}`);
  });
  test('should return primary main 70% whenever disabled', () => {
    const color = getBackgroundColor({
      theme,
      variant: 'primary',
      disabled: true,
    });
    expect(color).toBe(`${theme.brand.primary.main}70`);
  });
});
