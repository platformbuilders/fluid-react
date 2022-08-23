---
id: component.button
title: Button
---

<!-- Component declaration begin -->

import { Button } from '@platformbuilders/fluid-react';

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de botões dentro de uma aplicação.

## Exemplo

<Button
  onPress={() => {}}
  children={'Click me!'}
  style={{
    color: "#F9BD00",
    border: "1px solid #F9BD00"
  }}
/>


### Fonte
```javascript
import { Button } from '@platformbuilders/fluid-react';

function handleClickButton(){
  // YOUR_FUNCTION...
}

<Button
  onPress={handleClickButton}
  children={'Click me!'}
  style={{
    color: "#F9BD00",
    border: "1px solid #F9BD00"
  }}
/>
```

## Atributos

| Formato        | Conceito      | Tipo   |
| ------|-----|-----|
| **children**  	| Aqui é declarado uma string que será renderizada dentro do botão.	| **string** 	|
| **onPress** 	| Evento disparado quando o botão for pressionado, quando evocado, chama uma função. 	| **function** 	|
| **disabled?** 	| Define se o botão está habilitado ou não.	| **boolean** 	|
| **key?** 	| Geralmente utilizado em listas, onde cada elemento tem sua chave. 	| **string** 	|
| **loading?** 	| Declarado se o componente estiver carregando. 	| **boolean** 	|
| **secondary?** 	| É declarado quando o tema do componente é o secundário. 	| **boolean** 	|

<!-- 
| **transparent?** 	| Estilo da forma a ser renderizada, podendo ser: *circle, rounded* ou *square* 	| **string** 	|
| **type?** 	| Estilo da forma a ser renderizada, podendo ser: *circle, rounded* ou *square* 	| **string** 	|
-->

<!-- Documentation end -->
