import styled from 'styled-components';
import { getTheme, pxToRem } from '@platformbuilders/theme-toolkit';
import {
  Content,
  Item,
  ItemText,
  Portal,
  Root,
  Trigger,
  Viewport,
} from '@radix-ui/react-select';

const primaryMain = getTheme('brand.primary.main');
const primaryContrast = getTheme('brand.primary.contrast');
const boxShadowZ0 = getTheme('boxShadow.z0');
const textMain = getTheme('text.main');
const backgroundZ4 = getTheme('background.z4');
const fontSizeLg = getTheme('fontSizes.lg');

export const Wrapper = styled(Root)`
  display: flex;
`;

export const StyledTrigger = styled(Trigger)`
  display: flex;
  align-items: center;
  padding: ${pxToRem(8)} ${pxToRem(12)};
  width: 100%;
  height: ${pxToRem(44)};
  justify-content: space-between;
  font-size: ${fontSizeLg}px;
  border: 2px solid;
  border-color: ${primaryMain};
  background-color: ${primaryContrast};
  color: ${textMain};
  font-weight: 400;

  &[data-disabled] {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const StyledPortal = styled(Portal)`
  display: flex;
`;

export const StyledContent = styled(Content)`
  display: flex;
  box-shadow: ${boxShadowZ0};
  background-color: ${primaryContrast};
  width: var(--radix-select-trigger-width);
  padding: ${pxToRem(12)};
`;

export const StyledViewPort = styled(Viewport)`
  display: flex;
  flex-direction: column;
`;

export const StyledItem = styled(Item)`
  padding: ${pxToRem(8)} ${pxToRem(16)};
  background-color: ${primaryContrast};
  color: ${textMain};
  cursor: pointer;
  font-weight: 400;

  &[data-state='checked'] {
    background-color: ${backgroundZ4};
    color: ${primaryMain};
  }

  &[data-highlighted] {
    background-color: ${backgroundZ4};
    color: ${primaryMain};
  }
`;

export const StyledItemText = styled(ItemText)`
  font-size: ${fontSizeLg}px;
  color: ${textMain};
  font-weight: 400;
`;

export const PlaceholderText = styled.span`
  color: ${textMain};
  opacity: 0.5;
  font-weight: 400;
`;
