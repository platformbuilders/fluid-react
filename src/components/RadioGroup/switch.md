---
id: component.radiogroup
title: RadioGroup
---

<!-- Component declaration begin -->

import { useState } from 'react';
import { Radio, RadioGroup, Typography } from '@platformbuilders/fluid-react';

export const RadioGroupExample = () => {
const [isAnonymous, setIsAnonymous] = useState('no');

function handleIsAnonymous(e){
setIsAnonymous(e.target.value);
}

return(
<>
<Typography>Anônimo?</Typography>
<RadioGroup
value={isAnonymous}
onChange={(e) => setIsAnonymous(e.target.value)}
>
<Radio
value="yes"
label="Sim"
/>
<Radio
value="no"
label="Não"
/>
</RadioGroup>
</>
);
}

<!-- Component declaration end -->

<!-- Documentation begin -->
Esse componente tem como função auxiliar em agrupar varios componentes Radio

## Exemplo

### Fonte

```javascript
import { useState } from 'react';
import { Radio, RadioGroup, Typography } from '@platformbuilders/fluid-react';

export const RadioGroupExample = () => {
const [isAnonymous, setIsAnonymous] = useState('no');

function handleIsAnonymous(e){
setIsAnonymous(e.target.checked);
}

return(
<>
<Typography component="legend">Anônimo?</Typography>
<RadioGroup
value={isAnonymous}
onChange={(e) => setIsAnonymous(e.target.value)}
>
<Radio
value="yes"
label="Sim"
/>
<Radio
value="no"
label="Não"
/>
</RadioGroup>
</>
);
}

```

## Atributos

| Formato        | Conceito      | Tipo   |
| ------|-----|-----|
| **defaultValue** 	| O valor padrão é *any*. 	| **any** 	|
| **value** 	| O valor é *any*. 	| **any** 	|
| **onChange**  	| é uma função que recebe por parametro event, para acessar o valor basta acessar *event.target.value* que retorna uma *string* ou acessar o segundo parametro que é o valor (tambem uma string). 	| **func**
| **name**  	| O nome usado para fazer referência ao valor do controle. Se você não fornecer esta props, ele volta para um nome gerado aleatoriamente. 	| **string** 	|
