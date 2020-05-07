
# Avatar 

### Source Code
```js

import { FormContainer } from '@platformbuilders/react-ui';
import * as yup from 'yup';
import validationSchema from './validationSchema';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name Required'),
});

const Home = () => {
  return (
    <FormContainer
      validationSchema={validationSchema}
      initialValues={{name: ''}}
      onSubmit={e => console.log(e)}
    >
      {/* Inputs */}
    </FormContainer>
  )
}
```
<!-- PROPS -->
