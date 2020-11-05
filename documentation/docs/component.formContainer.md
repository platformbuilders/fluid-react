---
id: component.formContainer
title: FormContainer
---

<!-- Component declaration begin -->

import { FormContainer } from '@platformbuilders/react-ui';
import { useFormik } from 'formik';

export const FormExample = () => {
const formik = useFormik({
initialValues: {
name: '',
email: '',
},
onSubmit: values => {
alert(JSON.stringify(values, null, 2));
}
});
return(
<FormContainer
initialValues={formik.initialValues}
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
style={{marginTop: '10px'}} >Email</label>
<input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
          />
<button style={{marginTop: '15px'}} type="submit">
enviar
</button>
</form>
}
onSubmit={() => {formik.handleSubmit}}
/>
);
}

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização das caixas de seleção dentro de uma aplicação.

## Exemplo

<FormExample />

### Fonte

```javascript
import { FormContainer } from '@platformbuilders/react-ui';
import { useFormik } from 'formik';

const formik = useFormik({
  initialValues: {
    name: '',
    email: '',
  },
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
});

export const FormExample = () => {
  return (
    <FormContainer
      initialValues={formik.initialValues}
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
            placeholder="Email"
          />
          <button style={{ marginTop: '15px' }} type="submit">
            enviar
          </button>
        </form>
      }
      onSubmit={() => {
        formik.handleSubmit;
      }}
    />
  );
};
```
## Atributos

| Formato               | Conceito                                                                     | Tipo                        |
| --------------------- | ---------------------------------------------------------------------------- | --------------------------- |
| **children**          | Elementos filhos do formulário.                                              | **React.ReactNode**         |
| **initialValues**     | Valores iniciais dos campos do formulário.                                   | **Record<string, unknown>** |
| **onSubmit**          | É disparado quando o formulário é submetido.                                 | **function**                |
| **key?**              | Geralmente utilizado em listas, onde cada elemento tem sua chave.            | **string**                  |
| **validateOnChange?** | Define se é pra validar cada vez que algum campo do formulário for alterado. | **boolean**                 |
| **validationSchema?** | É o que diz como o formulário será validado.                                 | \*\*Record<string, unknown> | undefined\*\* |


<!-- Documentation end -->
