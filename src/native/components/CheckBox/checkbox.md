
# CheckBox ☑

Simple CheckBox Example:

![checkbox](https://user-images.githubusercontent.com/44801113/81001685-7ddcb200-8e1e-11ea-97ba-fc0f796b0162.png)

```js
import React, { useState } from 'react';
import { CheckBox } from '@platformbuilders/react-native-ui';

const Home: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckBox = () => setChecked(!checked);

  return (
      <CheckBox
        label="Enable Notification"
        checked={checked}
        labelBefore="Control Notification"
        onPress={handleCheckBox}
        error="This is an error message"
      />
  );
}

export default Home;
```

## Props

| Name  | Required | Type | Default Value | Description 
| ------------- | ------------- | ------------- |------------- |------------- |
| checked  | false | boolean | false | enable/ disable |
| label  | false | string / ReactElement | '' | label of checkbox |
| labelBefore  | false | string | '' | text shown on the left side |
| error  | false | string | '' | error message |
| onPress  | false | function | () => null | handle checkbox |
| labelStyle  | false | object[] | [] | style label |
| labelStyle  | false | object[] | [] | style label |
| style  | false | any | {} | style wrapper checkbox |
