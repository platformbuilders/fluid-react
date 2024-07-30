import { IMaskInput } from 'react-imask';
import styled, { css } from 'styled-components';
import { getTheme, ifStyle, pxToRem } from '@platformbuilders/theme-toolkit';

type HasIcon = {
  $hasIconLeft?: boolean;
  $hasIconRight?: boolean;
};

type PlaceholderLabelProps = {
  $hasValue: boolean;
  $hasError: boolean;
} & HasIcon;

type VariantProps = { $variant?: 'default' | 'outlined' };

type MessageProps = VariantProps & {
  $hasError: boolean;
};

type InputProps = VariantProps & {
  $hasError: boolean;
  $isDisabled?: boolean;
} & HasIcon;

type InputWrapperProps = VariantProps & {
  $hasFocus: boolean;
  $hasError: boolean;
  $isDisabled?: boolean;
};

type IconProps = {
  $clickable?: boolean;
  $hasError: boolean;
};

type LabelProps = {
  $hasFocus: boolean;
  $hasError: boolean;
  $isDisabled?: boolean;
} & HasIcon;

type FieldsetProps = {
  $hasFocus: boolean;
  $hasError: boolean;
  $isDisabled?: boolean;
};

const primaryMain = getTheme('brand.primary.main');
const dangerMain = getTheme('danger.main');
const fontSizeMin = getTheme('fontSizes.min');
const fontSizeXxs = getTheme('fontSizes.xxs');
const fontSizeSm = getTheme('fontSizes.sm');
const fontSizeMd = getTheme('fontSizes.md');
const spacingSm = getTheme('spacing.sm');
const spacingMd = getTheme('spacing.md');
const spacingLg = getTheme('spacing.lg');
const textMain = getTheme('text.main');
const borderRadiusMd = getTheme('borderRadius.md');

const hasError = ifStyle('$hasError');

const inputOutlinedStyles = ({
  $hasIconRight,
  $hasIconLeft,
  $hasError,
}: InputProps) => css`
  border: none;
  outline: none;
  font-size: ${fontSizeSm}px;
  width: 100%;
  height: 30px;
  padding: 0;
  background: transparent;
  margin-bottom: 0;

  ${$hasIconRight && `padding-right: ${pxToRem(36)};`}
  ${$hasIconLeft && `padding-left: ${pxToRem(36)};`}
  ${$hasError && `border-color: ${dangerMain}10`};

  &::placeholder {
    color: transparent;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const inputDefaultStyles = ({
  $hasIconRight,
  $hasIconLeft,
  $hasError,
}: InputProps) => css`
  width: 100%;
  font-size: ${fontSizeMd}px;
  line-height: 147.6%;
  border-color: ${(props) => hasError(dangerMain(props), '#121212')(props)};
  display: flex;
  height: ${pxToRem(44)};
  padding: 0px ${spacingSm}px 0px ${spacingMd}px;
  ${$hasIconRight && `padding-right: ${pxToRem(36)};`}
  ${$hasIconLeft && `padding-left: ${pxToRem(36)};`}
        align-items: center;
  gap: ${pxToRem(12)};
  background: ${(props) =>
    !!$hasError ? `${dangerMain(props)}10` : `${textMain(props)}10`};
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
  ${({ $variant, ...props }) =>
    $variant === 'outlined'
      ? inputOutlinedStyles(props)
      : inputDefaultStyles(props)}
`;

export const StyledIMaskInput = styled(IMaskInput)<InputProps>`
  ${({ $variant, ...props }) =>
    $variant === 'outlined'
      ? inputOutlinedStyles(props)
      : inputDefaultStyles(props)}
`;

export const Message = styled.p<MessageProps>`
  font-size: ${fontSizeMd}px;
  color: ${(props) => hasError(dangerMain(props), textMain(props))(props)};
  letter-spacing: 0.0275rem;
  margin: ${spacingSm}px ${spacingMd}px;

  ${({ $variant }) =>
    $variant === 'outlined' &&
    css`
      display: flex;
      align-items: center;
      gap: ${pxToRem(4)};
      font-size: ${fontSizeXxs}px;
      margin: 0;
      line-height: 1.3rem;

      svg {
        width: ${pxToRem(12)};
        height: ${pxToRem(12)};
      }
    `};
`;

export const Wrapper = styled.div<VariantProps>`
  margin-bottom: ${({ $variant }) =>
    $variant === 'outlined' ? `0` : `${spacingLg}px`};
  position: relative;
`;

export const IconWrapperLeft = styled.div<IconProps>`
  position: absolute;
  left: ${pxToRem(14)};
  top: ${pxToRem(22)};
  transform: translateY(-50%);
  cursor: ${({ $clickable }) => (!!$clickable ? 'pointer' : 'default')};
  color: ${hasError(dangerMain, primaryMain)};
`;

export const IconWrapperRight = styled.div<IconProps>`
  position: absolute;
  right: ${pxToRem(14)};
  top: ${pxToRem(22)};
  transform: translateY(-50%);
  cursor: ${({ $clickable }) => (!!$clickable ? 'pointer' : 'default')};
  color: ${hasError(dangerMain, primaryMain)};
`;

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: ${pxToRem(12)};
  left: ${pxToRem(16)};
  font-size: ${fontSizeSm}px;
  padding: 0 ${pxToRem(4)};
  transition: all 0.2s ease;
  color: ${hasError(dangerMain, '#10141633')};
  ${({ $hasIconRight }) => $hasIconRight && `padding-right: ${pxToRem(36)};`}
  ${({ $hasIconLeft }) => $hasIconLeft && `padding-left: ${pxToRem(36)};`}

  ${({ $hasFocus }) =>
    $hasFocus &&
    css`
      top: ${pxToRem(-8)};
      left: ${pxToRem(12)};
      font-size: ${fontSizeMin}px;
      color: ${hasError(dangerMain, primaryMain)};
      padding: 0 ${pxToRem(4)};
    `}

    ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.5;
    `}
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ $variant, $hasFocus, $isDisabled }) =>
    $variant === 'outlined' &&
    css`
      position: relative;
      border-radius: ${pxToRem(6)};
      padding: 0 ${pxToRem(12)};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 44px;
      border: ${$hasFocus ? 'none' : `1px solid #10141633`};
      border-color: ${hasError(dangerMain, '')};

      ${$isDisabled && `opacity: 0.5`};

      &:hover {
        border-color: ${hasError(dangerMain, primaryMain)};
        ${$isDisabled && `border-color: #10141633`};
      }
    `}
`;

export const Fieldset = styled.fieldset<FieldsetProps>`
  position: absolute;
  top: ${pxToRem(-5)};
  left: ${pxToRem(-1)};
  right: ${pxToRem(-1)};
  bottom: 0;
  border: 2px solid;
  border-color: ${hasError(dangerMain, primaryMain)};
  border-radius: inherit;
  padding: 0 ${pxToRem(8)};
  pointer-events: none;
  display: ${({ $hasFocus }) => !$hasFocus && 'none'};

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      border: 1px solid #10141633;
    `}

  legend {
    width: auto;
    padding: 0 ${pxToRem(5)};
    height: ${pxToRem(11)};
    font-size: ${pxToRem(12)};
    display: inline-block;
    color: ${hasError(dangerMain, primaryMain)};

    span {
      visibility: ${({ $hasFocus }) => $hasFocus && 'hidden'};
    }
  }
`;
