import theme from '../../theme';
import { getHoverColor, opacityHover } from '../index';

describe('test getHoverColor', () => {
  test('should return background colors primary no variant specified', () => {
    const color = getHoverColor({ theme });
    expect(color).toBe(`${theme.brand.primary.main}${opacityHover}`);
  });
  test('should return background colors primary', () => {
    const color = getHoverColor({ theme, variant: 'primary' });
    expect(color).toBe(`${theme.brand.primary.main}${opacityHover}`);
  });
  test('should return background color secondary', () => {
    const color = getHoverColor({
      theme,
      variant: 'secondary',
    });
    expect(color).toBe(`${theme.brand.secondary.main}${opacityHover}`);
  });
  test('should return background color accent', () => {
    const color = getHoverColor({
      theme,
      variant: 'accent',
    });
    expect(color).toBe(`${theme.brand.accent.main}${opacityHover}`);
  });
  test('should return background color danger', () => {
    const color = getHoverColor({
      theme,
      variant: 'danger',
    });
    expect(color).toBe(`${theme.danger.main}${opacityHover}`);
  });
  test('should return background color warning', () => {
    const color = getHoverColor({
      theme,
      variant: 'warning',
    });
    expect(color).toBe(`${theme.warning.main}${opacityHover}`);
  });
  test('should return background color info', () => {
    const color = getHoverColor({
      theme,
      variant: 'info',
    });
    expect(color).toBe(`${theme.info.main}${opacityHover}`);
  });
  test('should return background color flat', () => {
    const color = getHoverColor({
      theme,
      variant: 'flat',
    });
    expect(color).toBe(`transparent`);
  });
  test('should return background color invert', () => {
    const color = getHoverColor({
      theme,
      variant: 'invert',
    });
    expect(color).toBe(`${theme.brand.primary.contrast}${opacityHover}`);
  });
  test('should return primary main 70% whenever disabled', () => {
    const color = getHoverColor({
      theme,
      variant: 'primary',
      disabled: true,
    });
    expect(color).toBe(`${theme.brand.primary.main}${opacityHover}`);
  });
});
