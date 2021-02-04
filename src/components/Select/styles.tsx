import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const Wrapper = styled(FormControl)``;

export const MaterialSelect = styled(Select)`
  .MuiSelect-select {
    width: calc(100% - 32px) !important;
  }
`;

export const Item = styled(MenuItem)`
  .MuiListItem-root {
    width: 100% !important;
  }
`;
