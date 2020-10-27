
# If 

## If a condition is true it will display the component

```js
import React from 'react';
import { Text } from 'react-native';
import { If } from '@platformbuilders/react-native-ui';

const Home: React.FC = () => {
   <If condition={true}>
      <Text>Hello</Text>
   </If>
  );
}

export default Home;
```


| Name  | Required | Type | Default Value | Description 
| ------------- | ------------- | ------------- |------------- |------------- |
| condition | true | boolean |  |  |
