import React from 'react';
import styled from 'styled-components';
import { FormControlLabel, Radio } from '@material-ui/core';
import { RadioProps } from '../../types';
import { getBackgroundColor } from '../../utils/helpers';

export const StyledRadio = styled(({ label, labelPlacement, ...rest }) => (
  <FormControlLabel
    control={<Radio {...rest} />}
    label={label}
    labelPlacement={labelPlacement}
  />
))<RadioProps>((props) => ({
  '&.Mui-checked': {
    color: getBackgroundColor(props),
    '&:hover': {
      backgroundColor: getBackgroundColor(props) + '70',
    },
  },
  '&:hover': {
    backgroundColor: getBackgroundColor(props) + '70',
  },
}));
