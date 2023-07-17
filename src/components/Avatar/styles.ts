import styled from 'styled-components';
import { switchStyle } from '@platformbuilders/theme-toolkit';

enum Variants {
  circle = 'circle',
  rounded = 'rounded',
  square = 'square',
}

export type AvatarVariants = keyof typeof Variants;

type WrapperProps = {
  $variant?: AvatarVariants;
};

const getVariantStyle = switchStyle('$variant');

export const Wrapper = styled.span<WrapperProps>`
  user-select: none;
  border-radius: ${getVariantStyle({
    [Variants.circle]: '100%',
    [Variants.rounded]: '4px',
    [Variants.square]: '0px',
    default: '0px',
  })};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
