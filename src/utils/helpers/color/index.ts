import { getTheme } from '../index';

const brandPrimary = getTheme('brand.primary.main');
const brandSecondary = getTheme('brand.secondary.main');
const brandTertiary = getTheme('brand.tertiary.main');
const brandAccent = getTheme('brand.accent.main');
const infoMain = getTheme('info.main');
const dangerMain = getTheme('danger.main');
const warningMain = getTheme('warning.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');
const brandSecondaryContrast = getTheme('brand.secondary.contrast');
const brandTertiaryContrast = getTheme('brand.tertiary.contrast');
const brandAccentContrast = getTheme('brand.accent.contrast');
const infoContrast = getTheme('info.contrast');
const dangerContrast = getTheme('danger.contrast');
const warningContrast = getTheme('warning.contrast');

export const getBackgroundColor = (props: any): string | number => {
  if (props.disabled) {
    return `${brandPrimary(props)}70`;
  }
  switch (props.variant) {
    case 'primary':
      return brandPrimary(props);
    case 'secondary':
      return brandSecondary(props);
    case 'tertiary':
      return brandTertiary(props);
    case 'accent':
      return brandAccent(props);
    case 'info':
      return infoMain(props);
    case 'warning':
      return warningMain(props);
    case 'danger':
      return dangerMain(props);
    default:
      return brandPrimary(props);
  }
};

export const getTextColor = (props: any): string | number => {
  if (props.disabled) {
    return brandPrimaryContrast(props);
  }
  switch (props.variant) {
    case 'primary':
      return brandPrimaryContrast(props);
    case 'secondary':
      return brandSecondaryContrast(props);
    case 'tertiary':
      return brandTertiaryContrast(props);
    case 'accent':
      return brandAccentContrast(props);
    case 'danger':
      return dangerContrast(props);
    case 'info':
      return infoContrast(props);
    case 'warning':
      return warningContrast(props);
    default:
      return brandPrimaryContrast(props);
  }
};
