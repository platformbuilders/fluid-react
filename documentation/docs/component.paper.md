---
id: component.paper.concept
title: Conceito
---

<!-- Component declaration begin -->

import { Paper } from '@platformbuilders/react-ui';

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de quadros que (nesse caso...) simulam um papel dentro de uma aplicação.

## Atributos

| Formato        | Conceito      | Tipo   |
| ------|-----|-----|
| **children?**  	| Elementos/componentes filhos do *Paper*. 	| **React.ReactNode** 	|
| **key?** 	| Geralmente utilizado em listas, onde cada elemento tem sua chave. 	| **string** 	|

## Exemplo

### Fonte
```javascript
import { Paper } from '@platformbuilders/react-ui';

<Paper>
  Esse é um componente papel.
</Paper>
```

### Visualização

<Paper>
  Esse é um componente papel.
</Paper>

<!-- Documentation end -->
