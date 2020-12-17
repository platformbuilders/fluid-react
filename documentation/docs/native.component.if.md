---
id: native.component.if
title: If
---

<!-- Component declaration begin -->

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de renderização condicionada dentro de uma aplicação.

### Visualização
> Não é possível renderizar componentes React Native diretamente na web, portanto, serão mostradas prints para exemplificar.

![button](../static/img/screenshots/if.jpg)

:::info
Não é exatamente um componente visual, está mais para um encapsulador de elementos JSX que renderiza os elementos filhos se a condição inserida for satisfeita.
:::

### Fonte

```javascript
const numero1 = 717;

<If condition={numero1 % 2 === 0}>
  <Typography>Elemento par</Typography>
</If>
<If condition={numero1 % 2 !== 0}>
  <Typography>Elemento ímpar</Typography>
</If>
```


## Atributos

| Formato            | Conceito                                                                                                | Tipo                 |
| ------------------ | ------------------------------------------------------------------------------------------------------- | -------------------- |
| **children** | Elementos filhos do componente.                                                     | **React.ReactNode** |
| **condition** | Condição que determinará se os componentes filhos serão renderizados.  | **boolean** |
| **key?** 	| Define a chave do componente. 	| **number, string** 	|

<!-- Documentation end -->
