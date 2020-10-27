
# Loading Indicator 🔁 

## Example
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/44801113/81099998-2869d900-8ee2-11ea-9b81-f3df2a34bcd9.gif)


## Source Code
```js
import React from 'react';
import { LoadingIndicator } from '@platformbuilders/react-native-ui';

const Home: React.FC = () => {
  return (
      <LoadingIndicator large />
  );
}

export default Home;
```

## Props 

| Name  | Required | Type | Default Value | Description 
| ------------- | ------------- | ------------- |------------- |------------- |
| animation | false | string | circular | options: circular, linear, button  |
| large | false | boolean | false | size loading  |

