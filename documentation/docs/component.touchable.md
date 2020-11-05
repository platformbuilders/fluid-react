---
id: component.touchable.concept
title: Conceito
---

<!-- Component declaration begin -->
import { Touchable } from '@platformbuilders/react-ui';

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de elementos "tocáveis" dentro de uma aplicação.

## Atributos

| Formato        | Conceito      | Tipo   |
| ------|-----|-----|
| **onPress** 	| Evento disparado quando componente é pressionado. Quando evocado, chama uma função. 	| **function** 	|
| **children?**  	| Elementos filhos do componente. 	| **React.ReactNode** 	|
| **key?** 	| Define a chave do componente. 	| **number, string** 	|


## Exemplo

### Fonte
```javascript
import { Touchable } from '@platformbuilders/react-ui';

<Touchable
  onPress={() => {}}
  children={<h1>Touchable</h1>}
  key="f4345525242345234224"
/>
```

### Visualização

<Touchable
  onPress={() => {}}
  children={<h1>Touch me!</h1>}
  key="f4345525242345234224"
/>

<!-- Documentation end -->
