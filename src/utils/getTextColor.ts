import { getTheme } from '@platformbuilders/theme-toolkit';

const brandPrimary = getTheme('brand.primary.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');
const brandSecondaryContrast = getTheme('brand.secondary.contrast');
const brandAccentContrast = getTheme('brand.accent.contrast');
const infoContrast = getTheme('info.contrast');
const dangerContrast = getTheme('danger.contrast');
const warningContrast = getTheme('warning.contrast');

export const getTextColor = (props: any): string => {
  if (props.disabled) {
    return `${brandPrimaryContrast(props)}`;
  }
  switch (props.variant) {
    case 'primary':
      return `${brandPrimaryContrast(props)}`;
    case 'secondary':
      return `${brandSecondaryContrast(props)}`;
    case 'accent':
      return `${brandAccentContrast(props)}`;
    case 'danger':
      return `${dangerContrast(props)}`;
    case 'info':
      return `${infoContrast(props)}`;
    case 'warning':
      return `${warningContrast(props)}`;
    case 'invert':
      return `${brandPrimary(props)}`;
    case 'flat':
      return `${brandPrimary(props)}`;
    default:
      return `${brandPrimaryContrast(props)}`;
  }
};
