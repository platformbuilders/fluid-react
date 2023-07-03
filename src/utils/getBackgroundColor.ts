import { getTheme } from '@platformbuilders/theme-toolkit';

const brandPrimary = getTheme('brand.primary.main');
const brandSecondary = getTheme('brand.secondary.main');
const brandAccent = getTheme('brand.accent.main');
const infoMain = getTheme('info.main');
const dangerMain = getTheme('danger.main');
const warningMain = getTheme('warning.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');

export const getBackgroundColor = (props: any): string => {
  if (props.disabled) {
    return `${brandPrimary(props)}70`;
  }
  switch (props.variant) {
    case 'primary':
      return `${brandPrimary(props)}`;
    case 'secondary':
      return `${brandSecondary(props)}`;
    case 'accent':
      return `${brandAccent(props)}`;
    case 'info':
      return `${infoMain(props)}`;
    case 'warning':
      return `${warningMain(props)}`;
    case 'danger':
      return `${dangerMain(props)}`;
    case 'invert':
      return `${brandPrimaryContrast(props)}`;
    case 'flat':
      return `${'transparent'}`;
    default:
      return `${brandPrimary(props)}`;
  }
};
