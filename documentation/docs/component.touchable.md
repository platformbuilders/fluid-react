---
id: component.touchable
title: Touchable
---

<!-- Component declaration begin -->

import { Touchable } from '@platformbuilders/fluid-react';

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de elementos "tocáveis" dentro de uma aplicação.

## Exemplo

<Touchable
onPress={() => {}}
children={<h1>Touch me!</h1>}
key="f4345525242345234224"
/>

### Fonte

```javascript
import { Touchable } from '@platformbuilders/fluid-react';

<Touchable
  onPress={() => {}}
  children={<h1>Touchable</h1>}
  key="f4345525242345234224"
/>;
```

## Atributos

| Formato       | Conceito                                                                            | Tipo                |
| ------------- | ----------------------------------------------------------------------------------- | ------------------- |
| **onPress**   | Evento disparado quando componente é pressionado. Quando evocado, chama uma função. | **function**        |
| **children?** | Elementos filhos do componente.                                                     | **React.ReactNode** |
| **key?**      | Define a chave do componente.                                                       | **number, string**  |

<!-- Documentation end -->
