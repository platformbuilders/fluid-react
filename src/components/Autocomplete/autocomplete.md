---
id: component.autocomplete
title: Autocomplete
---

<!-- Component declaration begin -->

import { useState } from 'react';
import { Autocomplete, TextInput } from '@platformbuilders/fluid-react';

export const AutocompleteExample = () => {
const [movieOption, setMovieOption] = useState({ title: 'The Avengers', year: 2012 });
const top4Films = [
{ title: 'The Avengers', year: 2012 },
{ title: 'Avengers: Age of Ultron', year: 2015 },
{ title: 'Avengers: Infinity War', year: 2018 },
{ title: 'Avengers: Endgame', year: 2019 },
];

function handleChangeMovie(e, movie){
setMovieOption(movie);
}

function getOptionLabe(option) => 
option.title.toString();

return(
<>
<Autocomplete
options={top100Films}
getOptionLabel={getOptionLabe}
onChange={handleChangeMovie}
value={movieOption}
renderInput={(params) => (
  <TextInput {...params} value="" type="text" label="Combo box" name="teste" />
)}
/>
<h3>{movieOption.title}</h3>
</>
);
}

<!-- Component declaration end -->

<!-- Documentation begin -->
Esse componente tem como função auxiliar na achar um item para selecionar em uma lista muito grande

## Exemplo

### Fonte

```javascript
import { useState } from 'react';
import { Autocomplete } from '@platformbuilders/fluid-react';



const top4Films = [
{ title: 'The Avengers', year: 2012 },
{ title: 'Avengers: Age of Ultron', year: 2015 },
{ title: 'Avengers: Infinity War', year: 2018 },
{ title: 'Avengers: Endgame', year: 2019 },
];

function handleChange(e, movie){
  // YOUR_FUNCTION...
}
function handleGetOptionLabel(movie){
  // YOUR_FUNCTION...
}

<Autocomplete
  options={top100Films}
  getOptionLabel={handleGetOptionLabel}
  onChange={handleChange}
  value={{ title: 'The Avengers', year: 2012 }}
  renderInput={(params) => (
    <Test {...params} value="" type="text" label="Combo box" name="teste" />
  )}
/>

```

## Atributos

| Formato        | Conceito      | Tipo   |
| ------|-----|-----|
| **options**  	| Array dos items a serem listados. 	| **array**
| **renderInput**  	| Aqui vai renderiza o input, é passado uma função com o parametro sendo passado ao input 	| **function** 	|
| **getOptionLabel** 	| Espera-se uma função para pegar o valor selecionado e retornar para label. 	| **string** 	|
| **onChange** 	| Aqui é retornodo os valores da lista em uma funçao  *function(event: React.SyntheticEvent, value: T | Array<\T>, reason: string, details?: string) => void*	| **function** 	|
| **value** 	| O valor selecionado da lista. 	| **any** 	|

*Para saber mais sobre as props aceitas podem entrar em* https://mui.com/api/autocomplete/#props

## Observações

> Para utilizar com styled-component é importante utilizar desta forma para não perter a tipagem

```javascript
import styled from 'styled-components';
import { Autocomplete as DefaultAutocomplete } from '~/components';

export const Autocomplete = styled(DefaultAutocomplete)`
  width: 100%;
` as typeof DefaultAutocomplete;
```
