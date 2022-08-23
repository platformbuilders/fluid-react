---
id: component.paper
title: Paper
---

<!-- Component declaration begin -->

import { Paper } from '@platformbuilders/fluid-react';

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de quadros que (nesse caso...) simulam um papel dentro de uma aplicação.

## Exemplo

<Paper>
  Esse é um componente papel.
</Paper>

### Fonte

```javascript
import { Paper } from '@platformbuilders/fluid-react';

<Paper>Esse é um componente papel.</Paper>;
```

## Atributos

| Formato       | Conceito                                                          | Tipo                |
| ------------- | ----------------------------------------------------------------- | ------------------- |
| **children?** | Elementos/componentes filhos do _Paper_.                          | **React.ReactNode** |
| **key?**      | Geralmente utilizado em listas, onde cada elemento tem sua chave. | **string**          |

<!-- Documentation end -->
