---
id: component.avatar.attributes.src
title: src
---

<!-- Component declaration begin -->

import { Avatar } from '@platformbuilders/fluid-react';
import { default as Favicon } from '../static/img/favicon.ico';

<!-- Component declaration end -->

<!-- Documentation begin -->

:::caution

Atributo obrigatório

:::

Esse atributo é o que diz respeito a fonte que a imagem será carregada. A seguir serão mostradas algumas possibilidades para carregar a imagem.

## URL
Carregamento de imagem por URL, de um repositório de imagens por exemplo.

### Fonte

```javascript
<Avatar 
  src="https://avatars2.githubusercontent.com/u/61251953?s=240&v=4"
  onPress={() => {}}
  style={{
    width: "120px",
    height: "120px",
  }}
/>
```

### Visualização

<Avatar 
  src="https://avatars2.githubusercontent.com/u/61251953?s=240&v=4"
  onPress={() => {}}
  style={{
    width: "120px",
    height: "120px",
  }}
/>

## Componente
Geralmente é usado quando já se tem uma imagem local como um .png ou .svg, nesse caso estes são transformados em componentes e passados no src.

### Fonte

```javascript
import { Favicon } from '../static/img';

<Avatar 
  src={Favicon}
  onPress={() => {}}
  style={{
    width: "191px",
    height: "191px",
  }}
/>
```

### Visualização

<Avatar 
  src={Favicon}
  onPress={() => {}}
  style={{
    width: "191px",
    height: "191px",
    marginBottom: "30px",
  }}
/>

## Padrão
Se por acaso houver falha no src, por padrão, a imagem a ser renderizada será essa.

### Fonte

```javascript
<Avatar 
  src="url_errada"
  onPress={() => {}}
  style={{
    width: "120px",
    height: "120px",
  }}
/>
```

### Visualização

<Avatar 
  src="url_errada"
  onPress={() => {}}
  style={{
    width: "120px",
    height: "120px",
  }}
/>

<!-- Documentation end -->
