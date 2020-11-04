---
id: component.loadingIndicator.concept
title: Conceito
---

<!-- Component declaration begin -->

import { LoadingIndicator } from '@platformbuilders/react-ui';

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de animações de carregamento dentro de uma aplicação.

## Atributos

| Formato        | Conceito      | Tipo   |
| ------|-----|-----|
| **children?**  	| Elementos/componentes filhos. 	| **React.ReactNode** 	|
| **size?**  	| Define o tamanho da animação loading, podendo ser: *small, medium e large*.	| **string** 	|
| **key?** 	| Geralmente utilizado em listas, onde cada elemento tem sua chave. 	| **string** 	|

## Exemplo

### Fonte
```javascript
import { LoadingIndicator } from '@platformbuilders/react-ui';

<LoadingIndicator/>
```

### Visualização

<LoadingIndicator/>

<!-- Documentation end -->
