---
id: component.typography
title: Typography
---

<!-- Component declaration begin -->
import { Typography } from '@platformbuilders/react-ui';

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
import { Typography } from '@platformbuilders/react-ui';

<Typography
  variant="overline"
>
  Tipografia utilizando variant overline
</Typography>
```

## Atributos

| Formato        | Conceito      | Tipo   |
| ------|-----|-----|
| **children?**  	| Elementos filhos do componente. 	| **React.ReactNode** 	|
| **key?** 	| Define a chave do componente. 	| **number, string** 	|
| **variant?** 	| É o que define a variação do que seria uma tag de texto em HTML, podendo ser: *button, caption, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, overline* . | **function** 	|

<!-- Documentation end -->
