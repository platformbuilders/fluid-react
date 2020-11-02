# Radio Button 📻

## Example

![Text Input](https://user-images.githubusercontent.com/4137064/97174520-f8084680-1770-11eb-9170-f635e3d67bc0.png)

## Source Code

```js
import React from 'react';
import { RadioButton as DefaultRadioButton } from '@platformbuilders/react-native-ui';

const RadioButton: React.FC = () => {
  return (
    <RadioButton
      id="id_radio_button"
      accessibility="Select Information"
      size={18}
      internalSize={13}
      checked
      onPress={(): void => {}}
    />
  );
};

export default RadioButton;
```

## Props

| Name                    | Required | Type     | Default Value | Description                   |
| ----------------------- | -------- | -------- | ------------- | ----------------------------- |
| id                      | true     | string   | ' '           |                               |
| accessibility           | true     | string   | ' '           |                               |
| radioButtonColor        | false    | string   | '#212121'     | border color                  |
| checkedRadioButtonColor | false    | string   | '#212121'     | internal color                |
| checked                 | false    | boolean  | false         | checked / uncheked            |
| size                    | false    | number   | 18            | size of radio button          |
| internalSize            | false    | number   | 13            | internal size of radio button |
| onPress                 | false    | function | (): any => {} | handle press radio button     |
