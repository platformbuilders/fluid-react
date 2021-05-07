
# Text Input ⌨ 

## Example
![Text Input](https://user-images.githubusercontent.com/44801113/81105431-46d3d280-8eea-11ea-81cc-ee1cf1351b39.jpeg)



## Source Code
```js
import React from 'react';
import { TextInput } from '@platformbuilders/react-native-ui';

const Home: React.FC = () => {
  return (
      <TextInput
        large
        id="products_searc"
        accessibility="Product Search"
        placeholder="Product Search "
        contrast
        centered
        multiline
        iconTouchableEnabled
        iconName="barcode"
        iconSize={40}
        label="Products"
        error="has a error"
      />
  );
}

export default Home;
```

## Props 

| Name  | Required | Type | Default Value | Description 
| ------------- | ------------- | ------------- |------------- |------------- |
| id | true | string | ' '  |   |
| accessibility | true | string | ' '  |   |
| accessibilityLabel | true | string | ' '  |   |
| testID | true | string | ' '  |   |
| large | false | boolean | false  | size |
| contrast | false | boolean | false  | color  |
| inputRef | false | any |   | ref of input  |
| centered | false | boolean | false  | center input |
| withoutBottomline | false | boolean | false  | hide border bottom |
| multiline | false | boolean | false  |  |
| keyboardType | false | string | default  |  |
| keyboardType | false | string | default  |  |
| iconName | false | string | ' '  |  name of icon right |
| iconTouchableEnabled | false | boolean | false  |  icon clickable |
| iconSize | false | number | 20  |  icon size |
| status | false | string | DEFAULT  | options: SUCCES, FAILURE, DISABLED, DEFAULT |
| maskType | false | string | null  | options: credit-card, cpf, cnpj, zip-code, only-numbers, money, cel-phone, datetime, custom |
| label | false | string | ' '  |   |
| value | false | any | ' '  |  value of input |
| placeholder | false | string | ' '  |  placeholder of input |
| error | false | string | ' '  |  error message in bottom |
| style | false | object | {} |  style input |
| textStyle | false | object | {} |   |
| onBlur | false | function | (): any => {} |  handle input  |
| onFocus | false | function | (): any => {} |  handle input  |
| onChangeText | false | function | (): any => {} |  handle input  |
| onPressIcon | false | function | (): any => {} |  handle press icon  |








