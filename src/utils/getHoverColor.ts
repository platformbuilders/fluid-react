import { getTheme } from '@platformbuilders/theme-toolkit';

const brandPrimary = getTheme('brand.primary.main');
const brandSecondary = getTheme('brand.secondary.main');
const brandAccent = getTheme('brand.accent.main');
const infoMain = getTheme('info.main');
const dangerMain = getTheme('danger.main');
const warningMain = getTheme('warning.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');

export const opacityHover = '70';

export const getHoverColor = (props: any): string => {
  if (props.disabled) {
    return `${brandPrimary(props)}${opacityHover}`;
  }
  switch (props.variant) {
    case 'primary':
      return `${brandPrimary(props)}${opacityHover}`;
    case 'secondary':
      return `${brandSecondary(props)}${opacityHover}`;
    case 'accent':
      return `${brandAccent(props)}${opacityHover}`;
    case 'info':
      return `${infoMain(props)}${opacityHover}`;
    case 'warning':
      return `${warningMain(props)}${opacityHover}`;
    case 'danger':
      return `${dangerMain(props)}${opacityHover}`;
    case 'invert':
      return `${brandPrimaryContrast(props)}${opacityHover}`;
    case 'flat':
      return `${'transparent'}`;
    default:
      return `${brandPrimary(props)}${opacityHover}`;
  }
};
