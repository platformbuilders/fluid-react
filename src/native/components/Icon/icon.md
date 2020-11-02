
# Icon ⭐

![icon  ](https://user-images.githubusercontent.com/44801113/81093060-ed62a800-8ed7-11ea-841b-65b39a661e00.jpeg)



```js
import React from 'react';
import { Icon } from '@platformbuilders/react-native-ui';

const Home: React.FC = () => {
   <Icon
      id="icon"
      accessibility="icone"
      accessibilityLabel="icone"
      testID="test_icon"
      name="atom"
      touchable
      color="blue"
      size={50}
      onPress={()=> console.log('click')}
    />
  );
}

export default Home;
```


| Name  | Required | Type | Default Value | Description 
| ------------- | ------------- | ------------- |------------- |------------- |
| id | true | string |  | id icon |
| accessibility | false | string |  |accessibility |
| accessibilityLabel | false | string |  | |
| testID | false | string |  | |
| name | true | string | ' ' | icon save in application or from [MaterialCommunityIcons](https://materialdesignicons.com/) |
| size | false | number | 20  | icon size |
| color | false | string | undefined  | icon color |
| touchable | false | boolean | true  | icon clickable |
| style | false | any | []  | icon style |
| onPress | false | function | (): void => {}  | event when click in icon |
| borderColor | false | string | ' '  |  |
| backgroundColor | false | string | ' '  |  |


