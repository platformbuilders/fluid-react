
# DatePicker 📅

```js
import React from 'react';
import { DatePicker } from '@platformbuilders/react-native-ui';

const Home: React.FC = () => {
  return (
      <DatePicker
        mode='date'
        androidMode='spinner'
        locale='pt-BR'
        format='DD/MM/YYYY'
      />
  );
}

export default Home;
```


| Name  | Required | Type | Default Value | Description 
| ------------- | ------------- | ------------- |------------- |------------- |
| value | false | string | ' ' | value datePicker ex: 2020-25-12 |
| label | false | string | ' ' |  |
| dark | false | boolean | false | style dark  |
| editable | false | boolean | true |  |
| cancelBtnText | false | string | Cancelar |  |
| confirmBtnText | false | string | Confirmar |  |
| testID | false | string | ' ' |  |
| accessibilityLabel | false | string | ' ' |  |
| mode | true | string | date |  |
| androidMode | true | string | spinner |  |
| locale | true | string | pt-BR |  |
| onDateChange | false | (x: string): void | (): void => {} |  |
| maxDate | false | string | |  |
| format | true | string | 'DD/MM/YYYY' |  |



