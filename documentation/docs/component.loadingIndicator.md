---
id: component.loadingIndicator
title: LoadingIndicator
---

<!-- Component declaration begin -->

import { LoadingIndicator } from '@platformbuilders/fluid-react';

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de animações de carregamento dentro de uma aplicação.

## Exemplo

<LoadingIndicator/>

### Fonte

```javascript
import { LoadingIndicator } from '@platformbuilders/fluid-react';

<LoadingIndicator />;
```

## Atributos

| Formato       | Conceito                                                                    | Tipo                |
| ------------- | --------------------------------------------------------------------------- | ------------------- |
| **children?** | Elementos/componentes filhos.                                               | **React.ReactNode** |
| **size?**     | Define o tamanho da animação loading, podendo ser: _small, medium e large_. | **string**          |
| **key?**      | Geralmente utilizado em listas, onde cada elemento tem sua chave.           | **string**          |

<!-- Documentation end -->
