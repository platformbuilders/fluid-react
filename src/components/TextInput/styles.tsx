import styled from 'styled-components';
import { getTheme, ifStyle, pxToRem } from '@platformbuilders/theme-toolkit';

type HasIcon = {
  $hasIconLeft?: boolean;
  $hasIconRight?: boolean;
};

type PlaceholderLabelProps = {
  $hasValue: boolean;
  $hasError: boolean;
} & HasIcon;

type MessageProps = {
  $hasError: boolean;
};

type InputProps = {
  $hasError: boolean;
} & HasIcon;

const primaryMain = getTheme('brand.primary.main');
const dangerMain = getTheme('danger.main');
const fontSizeSm = getTheme('fontSizes.sm');
const fontSizeMd = getTheme('fontSizes.md');
const spacingXs = getTheme('spacing.xs');
const spacingSm = getTheme('spacing.sm');
const spacingMd = getTheme('spacing.md');
const spacingLg = getTheme('spacing.lg');
const textMain = getTheme('text.main');
const borderRadiusMd = getTheme('borderRadius.md');

const hasError = ifStyle('$hasError');

export const PlaceholderLabel = styled.span<PlaceholderLabelProps>`
  position: absolute;
  top: ${pxToRem(16)};
  left: ${pxToRem(14)};
  line-height: 147.6%;
  transition: top 0.2s;
  ${({ $hasIconLeft }) => !!$hasIconLeft && `left: ${pxToRem(36)};`}
  ${(props) =>
    props.$hasValue && `top: 0; font-size: ${fontSizeMd}; margin-bottom: 40px;`}

  color: ${(props) => hasError(dangerMain(props), primaryMain(props))(props)};
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  font-size: ${fontSizeMd}px;
  line-height: 147.6%;
  border-color: ${(props) => hasError(dangerMain(props), '#121212')(props)};
  display: flex;
  height: ${pxToRem(44)};
  padding: 0px ${spacingSm}px 0px ${spacingMd}px;
  ${({ $hasIconRight }) => !!$hasIconRight && `padding-right: ${pxToRem(36)};`}
  ${({ $hasIconLeft }) => !!$hasIconLeft && `padding-left: ${pxToRem(36)};`}
  align-items: center;
  gap: ${pxToRem(12)};
  background: ${(props) =>
    !!props.$hasError ? `${dangerMain(props)}10` : `${textMain(props)}10`};
  border-radius: ${borderRadiusMd}px;
  border: none;
  font-size: ${fontSizeSm}px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  &:focus {
    border-color: ${(props) =>
      hasError(dangerMain(props), primaryMain(props))(props)};
    outline: none;
  }
`;

export const Message = styled.p<MessageProps>`
  font-size: ${fontSizeMd}px;
  color: ${(props) => hasError(dangerMain(props), textMain(props))(props)};
  letter-spacing: 0.0275rem;
  margin: ${spacingSm}px ${spacingMd}px;
`;

export const Wrapper = styled.div`
  margin-bottom: ${spacingLg}px;
  position: relative;
`;

export const IconWrapperLeft = styled.div<{ clickable?: boolean }>`
  position: absolute;
  left: ${pxToRem(14)};
  top: ${pxToRem(22)};
  transform: translateY(-50%);
  cursor: ${({ clickable }) => (!!clickable ? 'pointer' : 'default')};
`;

export const IconWrapperRight = styled.div<{ clickable?: boolean }>`
  position: absolute;
  right: ${pxToRem(14)};
  top: ${pxToRem(22)};
  transform: translateY(-50%);
  cursor: ${({ clickable }) => (!!clickable ? 'pointer' : 'default')};
`;
