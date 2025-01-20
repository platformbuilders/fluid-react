import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Input = styled.input`
  display: inline-block;
  position: relative;
  margin: 0 0 10px;
  font-size: 16px;
  line-height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 20px;
  opacity: 0;
  z-index: 0;
`;

type LabelProps = {
  $checked: boolean;
  $variant?: 'default' | 'expanded';
};

export const Label = styled.label<LabelProps>`
  display: ${({ $variant }) => ($variant === 'expanded' ? 'flex' : 'block')};
  position: relative;
  margin: 0 0 15px;
  font-size: 16px;
  line-height: 24px;
  padding: 0 0 0 60px;
  cursor: pointer;

  ${({ $variant }) =>
    $variant === 'expanded' &&
    css`
      align-items: center;
      height: 32px;
    `}

  &:before {
    content: '';
    position: absolute;
    top: ${({ $variant }) => ($variant === 'expanded' ? '0' : '5px')};
    left: 0;
    z-index: 1;
    transition: background-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    width: ${({ $variant }) => ($variant === 'expanded' ? '52px' : '36px')};
    height: ${({ $variant }) => ($variant === 'expanded' ? '32px' : '14px')};
    background-color: ${({ $checked, $variant }) => {
      if ($checked) {
        return $variant === 'expanded' ? '#1E1F44' : 'rgba(63, 81, 181, 0.5)';
      }
      return 'rgba(0, 0, 0, 0.26)';
    }};
    border-radius: ${({ $variant }) =>
      $variant === 'expanded' ? '999px' : '14px'};
  }

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({ $variant, $checked }) => {
      if ($checked) {
        return $variant === 'expanded' ? '22px' : '16px';
      }
      return $variant === 'expanded' ? '2px' : '0';
    }};
    width: ${({ $variant }) => ($variant === 'expanded' ? '28px' : '20px')};
    height: ${({ $variant }) => ($variant === 'expanded' ? '28px' : '20px')};
    background-color: ${({ $variant, $checked }) =>
      $checked && $variant === 'default' ? '#3f51b5' : '#fff'};
    border-radius: 14px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    z-index: 2;
    transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: left, background-color;
  }
`;
