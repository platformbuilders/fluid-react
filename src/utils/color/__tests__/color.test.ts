import { getBackgroundColor, getTextColor } from '../index';
const theme = {
  brand: {
    primary: { main: '#FFF', contrast: '#000' },
    secondary: { main: '#000', contrast: '#FFF' },
  },
  info: { main: '#FF0000', contrast: '#000' },
};
describe('FN: getBackgroundColor', () => {
  test('should return background colors primary, secondary and info', () => {
    const colorPrimary = getBackgroundColor({ theme, variant: 'primary' });
    const colorDisabled = getBackgroundColor({
      theme,
      variant: 'primary',
      disabled: true,
    });
    const colorSecondary = getBackgroundColor({ theme, variant: 'secondary' });
    const colorInfo = getBackgroundColor({ theme, variant: 'info' });
    expect(colorPrimary).toBe(theme.brand.primary.main);
    expect(colorDisabled).toBe(`${theme.brand.primary.main}70`);
    expect(colorSecondary).toBe(theme.brand.secondary.main);
    expect(colorInfo).toBe(theme.info.main);
  });
  test('should return text colors primary, secondary and info', () => {
    const colorPrimary = getTextColor({ theme, variant: 'primary' });
    const colorDisabled = getTextColor({
      theme,
      variant: 'primary',
      disabled: true,
    });
    const colorSecondary = getTextColor({ theme, variant: 'secondary' });
    const colorInfo = getTextColor({ theme, variant: 'info' });
    expect(colorDisabled).toBe(theme.brand.primary.contrast);
    expect(colorPrimary).toBe(theme.brand.primary.contrast);
    expect(colorSecondary).toBe(theme.brand.secondary.contrast);
    expect(colorInfo).toBe(theme.info.contrast);
  });
});
