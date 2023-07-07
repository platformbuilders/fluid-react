---
id: component.typography
title: Typography
---

<!-- Component declaration begin -->
import { Typography } from '@platformbuilders/fluid-react';

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização da tipografia dentro de uma aplicação.

## Exemplo

<Typography
  variant="overline"
>
  Tipografia utilizando variant overline
</Typography>

### Fonte
```javascript
import { Typography } from '@platformbuilders/fluid-react';

<Typography
  variant="overline"
>
  Tipografia utilizando variant overline
</Typography>
```

## Atributos

| Formato        | Conceito      | Tipo   |
| ------|-----|-----|
| **children?**  	| Elementos filhos do componente. 	| **React.ReactNode** |
| **key?** | Define a chave do componente. | **number, string** |
| **variant?** | É o que define a variação do estilo, podendo ser: *min, xxs, xs, sm, md, lg, xl, xxl, max* . | **function** |
| **as?** | Define a tag a ser renderizada ex: h1, h2, h3, h4, h5, h6, p, span entre outras tags | **string** |

<!-- Documentation end -->
