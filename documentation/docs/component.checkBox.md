---
id: component.checkBox
title: CheckBox
---

<!-- Component declaration begin -->

import { useState } from 'react';
import { Checkbox } from '@platformbuilders/react-ui';

export const CheckExample = () => {
const [check, setCheck] = useState(false);
function handleCheck(){
check === true ? setCheck(false) : setCheck(true);
}
return(
<div>
<Checkbox
        checked={check}
        label="#SóBora"
        name="soBora"
        onChange={handleCheck}
      />
</div>
);
}

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização das caixas de seleção dentro de uma aplicação.

## Exemplo

<CheckExample />

### Fonte

```javascript
import { useState } from 'react';
import { Checkbox } from '@platformbuilders/react-ui';

export const CheckExample = () => {
  const [check, setCheck] = useState(false);

  function handleCheck() {
    check === true ? setCheck(false) : setCheck(true);
  }

  return (
    <div>
      <Checkbox
        checked={check}
        label="#SóBora"
        name="soBora"
        onChange={handleCheck}
      />
    </div>
  );
};
```

## Atributos

| Formato       | Conceito                                                                             | Tipo                |
| ------------- | ------------------------------------------------------------------------------------ | ------------------- |
| **checked**   | Define se está marcado ou não.                                                       | **boolean**         |
| **label**     | É o atributo que define a descrição do item a ser selecionado.                       | **string**          |
| **name**      | Nome do componente.                                                                  | **string**          |
| **onChange**  | Evento disparado quando o botão for pressionado, quando evocado, chama uma função.   | **function**        |
| **children?** | Elemento filho do componente.                                                        | **React.ReactNode** |
| **error?**    | Declarado quando houver um erro. É renderizado uma mensagem logo abaixo do marcador. | **boolean, string** |
| **key?**      | Geralmente utilizado em listas, onde cada elemento tem sua chave.                    | **string**          |

<!-- Documentation end -->
