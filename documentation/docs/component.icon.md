---
id: component.icon.concept
title: Conceito
---

<!-- Component declaration begin -->

import { Icon } from '@platformbuilders/react-ui';

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização dos ícones dentro de uma aplicação.

## Atributos

| Formato        | Conceito      | Tipo   |
| ------|-----|-----|
| **name**  	| É o atributo que define o nome do componente.	| **string** 	|
| **children?**  	| Elemento filho do componente. 	| **React.ReactNode** 	|
| **color**  	| É a cor do ícone, podendo seguir um *theme* usando as opções: *"inherit", "primary", "secondary", "action", "error", "disabled", undefined* 	| **string** 	|
| **key?** 	| Geralmente utilizado em listas, onde cada elemento tem sua chave. 	| **string** 	|
| **size?** 	| Define o tamanho do ícone, podendo ser: *"small", "inherit", "default", "large", undefined* .	| **string** |

## Exemplo

### Fonte
```javascript
import { Icon } from '@platformbuilders/react-ui';

<Icon
  name="erroneousName"
  color="#fff"
  size="default"
/>
```

### Visualização

> O componente Icon tem dependência com o *@material-ui/core* portanto quando um ícone não é encontrado, as duas primeiras letras do nome declarado são renderizadas.

<Icon
  name="erroneousName"
  color="#fff"
  size="default"
/>

## Ícones

Para saber os ícones possíveis do *@material-ui/core*, podemos consultar [aqui](https://material-ui.com/pt/components/material-icons/).

<!-- Documentation end -->
