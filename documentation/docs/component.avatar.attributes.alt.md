---
id: component.avatar.attributes.alt
title: alt
---

<!-- Component declaration begin -->

import { Avatar } from '@platformbuilders/react-elements';
const userName = "Gabriel Taborda Farias";

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse atributo renderiza uma letra, ou a primeira letra de uma *string*, caso a imagem a ser renderizada não esteja disponível.

## Exemplo

### Fonte
```javascript
//styles.ts
import { Avatar } from '@platformbuilders/react-elements';

const userName = "Gabriel Taborda Farias";

<Avatar alt={userName} style={{width: "100px", height: "100px", fontSize: "40px"}} src="tps://avatars2.githubusercontent.com/u/61251953?s=460&v=4" onPress={() => {}} />
```

> Dependendo do tamanho do Avatar, o tamanho da fonte a ser renderizado deve ser reajustado.

### Visualização
<Avatar alt={userName} style={{width: "100px", height: "100px", fontSize: "40px"}} src="tps://avatars2.githubusercontent.com/u/61251953?s=460&v=4" onPress={() => {}} />

<!-- Documentation end -->
