---
id: component.radio
title: Radio
---

<!-- Component declaration begin -->

import { useState } from 'react';
import { Radio } from '@platformbuilders/react-elements';

export const RadioExample = () => {
const [isAnonymous, setIsAnonymous] = useState(false);

function handleIsAnonymous(e){
setIsAnonymous(e.target.value);
}

return(
<>
<Radio
label="Anônimo"
checked={isAnonymous}
onChange={handleIsAnonymous}
variant="secondary"
/>
<h3>{isAnonymous}</h3>
</>
);
}

<!-- Component declaration end -->

<!-- Documentation begin -->
Esse componente tem como função auxiliar em resposta com varias opção de resposta mas o uma sera valida

## Exemplo

### Fonte

```javascript
import { useState } from 'react';
import { Radio } from '@platformbuilders/react-elements';

export const RadioExample = () => {
const [isAnonymous, setIsAnonymous] = useState(false);

function handleIsAnonymous(e){
setIsAnonymous(e.target.checked);
}

return(
<>
<Radio
label="Anônimo"
value={isAnonymous}
onChange={handleIsAnonymous}
variant="secondary"
/>
<h3>{isAnonymous}</h3>
</>
);
}

```

## Atributos

| Formato        | Conceito      | Tipo   |
| ------|-----|-----|
| **value** 	| O valor é *any*. 	| **any** 	|
| **onChange**  	| é uma função que recebe por parametro event, para acessar o valor basta acessar *event.target.value* que retorna uma *string*. 	| **func**
| **label**  	| Aqui vai poder adicionar uma label ao lado do component 	| **boolean** 	|
| **labelPlacement**  	| Aqui pode definir a posição da label, por default é end	| **string = 'top' | 'start' | 'bottom' | 'end'** 	|
| **disabled**  	| Aqui vai desabilitar o componente 	| **boolean** 	|
| **variant** 	| Aqui sera usado as cores de acordo com theme, por padrão usa *primary*	| **string** 	|
| **checked** 	| ira marcar caso o retornor for true	| **boolean** 	|
| **size** 	| Ira determinar o tamanho do componente *small* ou *medium*	| **string** 	|
| **icon** 	| O icon mostrará quando o componente estiver unchecked	| **Node** 	|
| **checkedIcon** 	| O icon mostrará quando o componente estiver checked 	| **Node** 	|
