import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

export const StyledCheckbox = styled((props) => (
  <label>
    <input type="checkbox" />
    <span>Checkbox</span>
  </label>
))``;
