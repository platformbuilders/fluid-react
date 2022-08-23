---
id: component.avatar.attributes.key
title: key
---

<!-- Component declaration begin -->

import { Avatar } from '@platformbuilders/fluid-react';

<!-- Component declaration end -->

<!-- Documentation begin -->

Muito utilizado em listas que renderizam um mesmo componente. A *key* ajuda na identificação de cada um desses items, quando for preciso remover ou editar algum deles por exemplo.

## Exemplo

### Fonte
```javascript
import { Avatar } from '@platformbuilders/fluid-react';

const items = [
  {
    image: 'https://avatars1.githubusercontent.com/u/7853902?s=460&u=95157c1485a757d3a49c1027d96d89bfa41632cb&v=4',
    key: '7853902'
  },
  {
    image: 'https://avatars2.githubusercontent.com/u/6132299?s=460&u=71215eb0aa9b3f9e1ac19a32cf5f150e7c8147ec&v=4',
    key: '6132299'
  },
  {
    image: 'https://avatars1.githubusercontent.com/u/34260368?s=460&u=161b7a2629066c87a0bdc77dac2aeaae9c85de89&v=4',
    key: '34260368'
  },
];

<div style={{flex: 1, display: "flex", flexDirection: "row"}}>
  {items.map((item) => {
    return(
      <>
        <AvatarCircle style={{width: "100px", height: "100px"}} key={item.key} src={item.image} onPress={() => {}}/>
        <div style={{margin: "10px"}}/>
      </>
    );
  })}
</div>
```

### Visualização
<div style={{flex: 1, display: "flex", flexDirection: "row"}}>
  <Avatar style={{width: "100px", height: "100px"}} key="7853902" src="https://avatars1.githubusercontent.com/u/7853902?s=460&u=95157c1485a757d3a49c1027d96d89bfa41632cb&v=4" onPress={() => {}}/>
  <div style={{marginRight: "10px"}}/>
  <Avatar style={{width: "100px", height: "100px"}} key="6132299" src="https://avatars2.githubusercontent.com/u/6132299?s=460&u=71215eb0aa9b3f9e1ac19a32cf5f150e7c8147ec&v=4" onPress={() => {}}/>
  <div style={{marginRight: "10px"}}/>
  <Avatar style={{width: "100px", height: "100px"}} key="34260368" src="https://avatars1.githubusercontent.com/u/34260368?s=460&u=161b7a2629066c87a0bdc77dac2aeaae9c85de89&v=4" onPress={() => {}}/>
  <div style={{marginRight: "10px"}}/>
</div>

<!-- Documentation end -->
