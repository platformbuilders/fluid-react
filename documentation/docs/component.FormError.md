---
id: component.formError
title: FormError
---

<!-- Component declaration begin -->

import { useState } from 'react';
import { FormError } from '@platformbuilders/react-elements';
import { useFormik } from 'formik';

export const FormErrorExample = () => {
const [error, setError] = useState(false);
const formik = useFormik({
initialValues: {
name: '',
email: '',
},
onSubmit: () => {
handleErrorSubmit();
}
});
function handleErrorSubmit(){
error === true? setError(false) : setError(true);
}
return(
<FormError
error={error? "Não foi possível enviar formulário" : ""}
children={
<form onSubmit={formik.handleSubmit}
name="Seus dados"
style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column'
          }} >
<label htmlFor="name">Nome</label>
<input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Seu nome"
          />
<label
htmlFor="email"
style={{marginTop: '10px'}} >
Email
</label>
<input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="email"
          />
<button style={{marginTop: '15px'}} type="submit">
enviar
</button>
</form>
}
/>
);
}

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de formulários quando houverem erros dentro do mesmo.

## Exemplo

<FormErrorExample />

### Fonte

```javascript
import { useState } from 'react';
import { FormError } from '@platformbuilders/react-elements';
import { useFormik } from 'formik';

export const FormErrorExample = () => {
  const [error, setError] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: () => {
      handleErrorSubmit();
    },
  });
  function handleErrorSubmit() {
    error === true ? setError(false) : setError(true);
  }
  return (
    <FormError
      error={error ? 'Não foi possível enviar formulário' : ''}
      children={
        <form
          onSubmit={formik.handleSubmit}
          name="Seus dados"
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Seu nome"
          />
          <label htmlFor="email" style={{ marginTop: '10px' }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="email"
          />
          <button style={{ marginTop: '15px' }} type="submit">
            enviar
          </button>
        </form>
      }
    />
  );
};
```

## Atributos

| Formato      | Conceito                                                          | Tipo                |
| ------------ | ----------------------------------------------------------------- | ------------------- |
| **error**    | Declarado quando houver algum erro no formulário.                 | **boolean, string** |
| **children** | Elementos filhos do formulário.                                   | **React.ReactNode** |
| **key?**     | Geralmente utilizado em listas, onde cada elemento tem sua chave. | **string**          |


<!-- Documentation end -->
