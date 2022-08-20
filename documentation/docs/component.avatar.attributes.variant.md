---
id: component.avatar.attributes.variant
title: variant
---

<!-- Component declaration begin -->

import styled from 'styled-components';
import { Avatar } from '@platformbuilders/fluid-react';

export const AvatarCircle = styled(Avatar).attrs({
  variant: 'circle',
})`
  width: 120px;
  height: 120px;
`;

export const AvatarRound = styled(Avatar).attrs({
  variant: 'rounded',
})`
  width: 120px;
  height: 120px;
`;

export const AvatarSquare = styled(Avatar).attrs({
  variant: 'square',
})`
  width: 120px;
  height: 120px;
`;

<!-- Component declaration end -->

<!-- Documentation begin -->


Nesse atributo é declarado o formato de renderização do avatar, podendo ser *circle, rounded e square*. Por padrão é **circle**.

> Esse atributo pode ser declarado tanto na própria tag...

```javascript
<Avatar variant="rounded" src="https://avatars2.githubusercontent.com/u/61251953?s=460&v=4" onPress={() => {}} />
```

> ...como pelo styled-components na hora de definir um estilo para o componente.

```javascript
  export const AvatarCircle = styled(Avatar).attrs({
    variant: 'rounded',
  })``;
```

A seguir, será mostrado como ele funciona na prática.

## circle
Renderiza em forma de círculo.

### Fonte
```javascript
//styles.ts
import styled from 'styled-components';
import { Avatar } from '@platformbuilders/fluid-react';

export const AvatarCircle = styled(Avatar).attrs({
  variant: 'circle',
})`
  width: 120px;
  height: 120px;
`;

//index.tsx
<AvatarCircle src="https://avatars2.githubusercontent.com/u/61251953?s=460&v=4" onPress={() => {}} />
```

### Visualização
<AvatarCircle src="https://avatars2.githubusercontent.com/u/61251953?s=460&v=4" onPress={() => {}} />

## rounded
Renderiza em um formato quadrado, porém, com os vértices arredondados.

### Fonte
```javascript
//styles.ts
import styled from 'styled-components';
import { Avatar } from '@platformbuilders/fluid-react';

export const AvatarRound = styled(Avatar).attrs({
  variant: 'rounded',
})`
  width: 120px;
  height: 120px;
`;

//index.tsx
<AvatarRound src="https://avatars2.githubusercontent.com/u/61251953?s=460&v=4" onPress={() => {}} />
```

### Visualização
<AvatarRound src="https://avatars2.githubusercontent.com/u/61251953?s=460&v=4" onPress={() => {}} />

## square
Renderiza em um formato quadrado.

### Fonte
```javascript
//styles.ts
import styled from 'styled-components';
import { Avatar } from '@platformbuilders/fluid-react';

export const AvatarSquare = styled(Avatar).attrs({
  variant: 'square',
})`
  width: 120px;
  height: 120px;
`;

//index.tsx
<AvatarSquare src="https://avatars2.githubusercontent.com/u/61251953?s=460&v=4" onPress={() => {}} />
```

### Visualização
<AvatarSquare src="https://avatars2.githubusercontent.com/u/61251953?s=460&v=4" onPress={() => {}} />

<!-- Documentation end -->
