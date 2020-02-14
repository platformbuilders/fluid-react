import React, { useState } from 'react';
import { CheckBox as BuildersCheckBox } from 'builders-ui';
import CenteredView from '../utils/CenteredView';

const CheckBox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <CenteredView>
      <BuildersCheckBox
        label="Label Storybook"
        checked={checked}
        onPress={() => setChecked(!checked)}
      />
    </CenteredView>
  );
};

export default CheckBox;
