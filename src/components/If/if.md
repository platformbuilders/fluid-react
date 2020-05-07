
# If 

## If a condition is true it will display the component

```js
import React from 'react';
import { If } from '@platformbuilders/react-ui';

const Home: React.FC = () => {
   <If condition={true}>
      <h1>Hello</h1>
   </If>
  );
}

export default Home;
```


| Name  | Required | Type | Default Value | Description 
| ------------- | ------------- | ------------- |------------- |------------- |
| condition | true | boolean |  |  |
