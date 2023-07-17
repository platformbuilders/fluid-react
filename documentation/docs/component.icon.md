---
id: component.icon
title: Icon
---

<!-- Component declaration begin -->

import { Icon } from '@platformbuilders/fluid-react';

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização dos ícones dentro de uma aplicação.

## Exemplo

### Fonte

```javascript
import { Icon } from '@platformbuilders/fluid-react';

<Icon name="erroneousName" color="#fff" size="default" />;
```

<Icon
  name="erroneousName"
  color="#fff"
  size="default"
/>

## Atributos

| Formato       | Conceito                                                                                                                                    | Tipo                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| **name**      | É o atributo que define o nome do componente.                                                                                               | **string**          |
| **children?** | Elemento filho do componente.                                                                                                               | **React.ReactNode** |
| **color**     | É a cor do ícone, podendo seguir um _theme_ usando as opções: _"inherit", "primary", "secondary", "action", "error", "disabled", undefined_ | **string**          |
| **key?**      | Geralmente utilizado em listas, onde cada elemento tem sua chave.                                                                           | **string**          |
| **size?**     | Define o tamanho do ícone, podendo ser: _"small", "inherit", "default", "large", undefined_ .                                               | **string**          |

<!-- Documentation end -->
