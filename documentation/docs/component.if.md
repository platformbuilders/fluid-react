---
id: component.if
title: If
---

<!-- Component declaration begin -->

import { If } from '@platformbuilders/react-elements';

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de quando elementos devem ser renderizados efetivamente dentro de uma aplicação.

## Exemplo

### Fonte
```javascript
import { If } from '@platformbuilders/react-elements';

<If
  condition={true}
>
  <h1>RENDERIZAÇÃO PERMITIDA</h1>
</If>

<If
  condition={false}
>
  <h1>RENDERIZAÇÃO NÃO PERMITIDA</h1>
</If>
```

### Visualização

<If
  condition={true}
>
  <h1>RENDERIZAÇÃO PERMITIDA</h1>
</If>

<If
  condition={false}
>
  <h1>Renderização não permitida pelo If</h1>
</If>

## Atributos

| Formato        | Conceito      | Tipo   |
| ------|-----|-----|
| **children**  	| Elementos/componentes a serem renderizados quando *condition* for **true**. 	| **React.ReactNode** 	|
| **condition**  	| Condição que determinará se o *children* será efetivamente renderizado.	| **boolean** 	|
| **key?** 	| Geralmente utilizado em listas, onde cada elemento tem sua chave. 	| **string** 	|


<!-- Documentation end -->
