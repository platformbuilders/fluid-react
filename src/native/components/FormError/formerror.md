
# FormError ❗
![WhatsApp Image 2020-05-05 at 12 57 39](https://user-images.githubusercontent.com/44801113/81088031-d076a680-8ed0-11ea-8200-2b6e0df7220f.jpeg)


```js
import React from 'react';
import { FormError } from '@platformbuilders/react-native-ui';

const Home: React.FC = () => {
  return (
      <FormError
        error="here is error message"
        centered
      />
  );
}

export default Home;
```


| Name  | Required | Type | Default Value | Description 
| ------------- | ------------- | ------------- |------------- |------------- |
| centered | false | boolean | false | center string |
| error | false | string | ' ' |  |
| children | false | React.Children |  | children  |
| style | false | CSSProperties |  |   |


