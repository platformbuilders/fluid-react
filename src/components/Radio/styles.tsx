import React from 'react';
import styled from 'styled-components';
import { FormControlLabel, Radio } from '@material-ui/core';

type Props = {
  id?: string;
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  // variant?: ColorsVariant;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: 'small' | 'medium';
  label?: string;
  labelPlacement?: string;
};

export const StyledRadio = styled(({ label, labelPlacement, ...rest }) => (
  <FormControlLabel
    control={<Radio {...rest} />}
    label={label}
    labelPlacement={labelPlacement}
  />
))<Props>``;
