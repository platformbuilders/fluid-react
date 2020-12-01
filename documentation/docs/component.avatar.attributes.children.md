---
id: component.avatar.attributes.children
title: children
---

<!-- Component declaration begin -->

import { Avatar } from '@platformbuilders/react-elements';
const userName = "Gabriel Taborda Farias";

<!-- Component declaration end -->

<!-- Documentation begin -->

Aqui é declarado algum componente filho que é renderizado quando a imagem do *[src](/docs/component.avatar.attributes.src)* não está disponível.

## Exemplo

### Fonte
```javascript
//styles.ts
import { Avatar } from '@platformbuilders/react-elements';

const userName = "Gabriel Taborda Farias";

<Avatar
  children={
    <div style={{
      borderRadius: "5px",
      padding: "8px",
      backgroundColor: "#1c1c"
    }}>
      Child
    </div>
  }
  alt={userName}
  style={{width: "100px", height: "100px"}}
  src="url_errada"
  onPress={() => {}}
/>
```

:::note
Note que apesar de ter um **alt** declarado, o **children** o sobrepõe.
:::

### Visualização
<Avatar
  children={
    <div style={{
      borderRadius: "5px",
      padding: "8px",
      backgroundColor: "#F9BD00"
    }}>
      Child
    </div>
  }
  alt={userName}
  style={{width: "100px", height: "100px"}}
  src="url_errada"
  onPress={() => {}}
/>

<!-- Documentation end -->
