---
id: component.Select
title: Select
---

<!-- Component declaration begin -->

import { useState } from 'react';
import { Select } from '@platformbuilders/react-elements';
export const SelectExample = () => {
const options = [
{
value: 'HTML',
label: 'HTML'
},
{
value: 'CSS',
label: 'CSS'
},
{
value: 'JS',
label: 'JS'
},
];
const [markedOption, setMarkedOption] = useState('');
return(
<>
<Select
style={{width: '500px'}}
onChange={(value) => {setMarkedOption(`Você selecionou ${value}!`)}}
values={options}
label="Selecione sua tecnologia favorita!"
/>
<h3>{markedOption}</h3>
</>
);
}

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de caixas de seleção em lista dentro de uma aplicação.

### Visualização

> Lembre-se que o atributo passado no evento **onChange** é o **value** e não o **label**.

<SelectExample/>

## Exemplo

### Fonte

```javascript
import { useState } from 'react';
import { Select } from '@platformbuilders/react-elements';

export const SelectExample = () => {
  const options = [
    {
      value: 'HTML',
      label: 'HTML',
    },
    {
      value: 'CSS',
      label: 'CSS',
    },
    {
      value: 'JS',
      label: 'JS',
    },
  ];

  const [markedOption, setMarkedOption] = useState('');

  return (
    <>
      <Select
        style={{ width: '500px' }}
        onChange={(value) => {
          setMarkedOption(`Você selecionou ${value}!`);
        }}
        values={options}
        label="Selecione sua tecnologia favorita!"
      />
      <h3>{markedOption}</h3>
    </>
  );
};

<SelectExample />;
```


## Atributos

| Formato            | Conceito                                                                                                | Tipo                 |
| ------------------ | ------------------------------------------------------------------------------------------------------- | -------------------- |
| **onChange**       | Evento disparado quando é selecionado algum item. Quando evocado, chama uma função.                     | **function**         |
| **values**         | Aqui são delcarados os items. Estes devem obedecer o padrão _value, label_ (no exemplo isso é visível). | **ValuesProps[]**    |
| **children?**      | Elementos filhos do componente.                                                                         | **React.ReactNode**  |
| **error?**         | Declarado quando houver algum erro na seleção.                                                          | **string, string[]** |
| **key?**           | Define a chave do componente **Select**.                                                                | **number, string**   |
| **label?**         | Define uma espécie de descrição do que está sendo selecionado.                                          | **string**           |
| **selectedValue?** | Define o valor selecionado.                                                                             | **number, string[]** |

<!-- Documentation end -->
