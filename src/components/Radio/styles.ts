import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 16px 0;
`;

export const Input = styled.input`
  display: none;
  &:checked + label:before {
    border-color: rgb(51, 122, 183);
    animation: ripple 0.2s linear forwards;
  }
  &:checked + label:after {
    transform: scale(1);
  }
`;

export const Label = styled.label`
  display: inline-block;
  min-height: 20px;
  position: relative;
  padding: 0 30px;
  margin-bottom: 0;
  cursor: pointer;
  vertical-align: bottom;

  @keyframes ripple {
    0% {
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0);
    }
    50% {
      box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.1);
    }
    100% {
      box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0);
    }
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    border-radius: 50%;
    transition: all 0.3s ease;
    transition-property: transform, border-color;
  }

  &:before {
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(0, 0, 0, 0.54);
  }

  &:after {
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    transform: scale(0);
    background: rgb(51, 122, 183);
  }
`;
