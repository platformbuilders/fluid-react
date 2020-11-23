---
id: component.avatar.attributes.onPress
title: onPress
---

<!-- Component declaration begin -->

import { Avatar } from '@platformbuilders/react-elements';
import { FC, useState } from 'react';
export const AvatarCounter = () => {
  const [count, setCount] = useState(0);
  function handleAvatarPress(){
    setCount(count + 1);
  }
  return(
    <div className="wrapper" style={{
      display: "flex",
      flex: 1,
      flexDirection: "row"
    }}>
      <div className="left" style={{
        display: "flex",
        flex: 1,
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Avatar style={{width: "100px", height: "100px"}} onPress={handleAvatarPress} src="https://avatars2.githubusercontent.com/u/61251953?s=460&v=4" />
      </div>
      <div className="right" style={{
        display: "flex",
        flex: 1,
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
      }}>
        Avatar foi pressionado {count} vezes.
      </div>
    </div>
  );
};

<!-- Component declaration end -->

<!-- Documentation begin -->

:::caution

Atributo obrigatório

:::

Esse atributo recebe uma função que é disparada quando o Avatar é pressionado.

## Exemplo

### Fonte

```javascript
import { Avatar } from '@platformbuilders/react-elements';
import { FC, useState } from 'react';

export const AvatarCounter = () => {
  const [count, setCount] = useState(0);

  function handleAvatarPress(){
    setCount(count + 1);
  }

  return(
    <div className="wrapper" style={{
      display: "flex",
      flex: 1,
      flexDirection: "row"
    }}>
      <div className="left" style={{
        display: "flex",
        flex: 1,
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
      }}>

        <Avatar style={{width: "100px", height: "100px"}} onPress={handleAvatarPress} src="https://avatars2.githubusercontent.com/u/61251953?s=460&v=4" />

      </div>
      <div className="right" style={{
        display: "flex",
        flex: 1,
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
      }}>

        Avatar foi pressionado {count} vezes.

      </div>
    </div>
  );
};

<AvatarCounter />
```

### Visualização

<AvatarCounter />

<!-- Documentation end -->
