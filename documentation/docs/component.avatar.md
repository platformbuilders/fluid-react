---
id: component.avatar
title: Exemplo
---

<!-- Component declaration begin -->

import { Avatar } from '@platformbuilders/react-ui';

export function handleAvatarPress(){
  // YOUR_FUNCTION...
}

export const fullName = "Gabriel Taborda Farias";

<!-- Component declaration end -->

<!-- Documentation begin -->
Esse componente tem como função auxiliar na manipulação, manutenção e padronização de avatares dentro de uma aplicação.

## Exemplo

<Avatar
  alt={fullName}
  onPress={handleAvatarPress}
  src="https://avatars3.githubusercontent.com/u/61251953?s=460&u=0629bc9a136959d3c36d29df56c029881f834fcd&v=4"
  variant="rounded"
  style={{
    width: "120px",
    height: "120px"
  }}
/>

## Fonte

```javascript
import { Avatar } from '@platformbuilders/react-ui';

const fullName = "Gabriel Taborda Farias";

function handleAvatarPress(){
  // YOUR_FUNCTION...
}

<Avatar
  alt={fullName}
  onPress={handleAvatarPress}
  src="https://avatars3.githubusercontent.com/u/61251953?s=460&u=0629bc9a136959d3c36d29df56c029881f834fcd&v=4"
  variant="rounded"
  style={{
    width: "120px",
    height: "120px"
  }}
/>

```

## Atributos

| Formato        | Conceito      | Tipo   |
| ------|-----|-----|
| **alt?**  	| Caso houver algum problema em *src*, será renderizado o alt que é a primeira letra da string declarada. 	| **string**
| **children?**  	| Caso houver algum problema em *src*, será renderizado o children. 	| **React.ReactNode** 	|
| **key?** 	| Geralmente utilizado em listas, onde cada elemento tem sua chave. 	| **string** 	|
| **onPress** 	| Evento disparado quando o avatar for pressionado, quando evocado, chama uma função. 	| **function** 	|
| **src** 	| É onde fica a fonte da imagem, seja esta um *componente* ou uma *URL* 	| **string** 	|
| **style?** 	| Aqui é declarado o estilo do componente. Pode ser definido com **styled-components** também. 	| **object** 	|
| **variant?** 	| Estilo da forma a ser renderizada, podendo ser: *circle, rounded* ou *square* 	| **string** 	|
