import styled from 'styled-components';

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
  checked: boolean;
};

export const Label = styled.label<LabelProps>`
  display: block;
  position: relative;
  margin: 0 0 10px;
  font-size: 16px;
  line-height: 24px;
  padding: 0 0 0 44px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    width: 36px;
    height: 14px;
    background-color: rgba(0, 0, 0, 0.26);
    border-radius: 14px;
    z-index: 1;
    transition: background-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    ${(props) => props.checked && 'background-color: rgba(63, 81, 181, .5);'}
  }

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 14px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    z-index: 2;
    transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: left, background-color;
    ${(props) => props.checked && 'left: 16px; background-color: #3f51b5;'}
  }
`;
