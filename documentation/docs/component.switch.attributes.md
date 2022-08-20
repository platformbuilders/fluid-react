---
id: component.switch
title: Switch
---

<!-- Component declaration begin -->

import { useState } from 'react';
import { Switch } from '@platformbuilders/fluid-react';

export const AutocompleteExample = () => {
const [isAnonymous, setIsAnonymous] = useState(false);

function handleIsAnonymous(e){
setIsAnonymous(e.target.checked);
}

return(
<>
<Switch
title="Anônimo?"
value={isAnonymous}
onChange={handleIsAnonymous}
variant="secondary"
/>
<h3>{isAnonymous}</h3>
</>
);
}

<!-- Component declaration end -->

<!-- Documentation begin -->
Esse componente tem como função auxiliar em resposta de sim ou não, ou ativar ou desativar uma funcionalidade

## Exemplo

### Fonte

```javascript
import { useState } from 'react';
import { Switch } from '@platformbuilders/fluid-react';

export const AutocompleteExample = () => {
const [isAnonymous, setIsAnonymous] = useState(false);

function handleIsAnonymous(e){
setIsAnonymous(e.target.checked);
}

return(
<>
<Switch
title="Anônimo?"
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
| **value** 	| O valor true ou false. 	| **boolean** 	|
| **onChange**  	| é uma função que recebe por parametro event, para acessar o valor basta acessar *event.target.value* que retorna uma *string* e *event.target.checked* retorna um *boolean*. 	| **func**
| **label**  	| Aqui vai poder adicionar uma label ao lado do component 	| **boolean** 	|
| **labelPlacement**  	| Aqui pode definir a posição da label, por default é end	| **string = 'top' | 'start' | 'bottom' | 'end'** 	|
| **disabled**  	| Aqui vai desabilitar o componente 	| **boolean** 	|
| **icon** 	| O icon mostrará quando o componente estiver unchecked	| **string** 	|
| **checkedIcon** 	| O icon mostrará quando o componente estiver checked 	| **string** 	|
