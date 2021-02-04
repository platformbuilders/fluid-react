---
id: native.component.loadingIndicator
title: LoadingIndicator
---

<!-- Component declaration begin -->

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de indicadores de carregamento dentro de uma aplicação.

### Visualização
> Não é possível renderizar componentes React Native diretamente na web, portanto, serão mostradas prints para exemplificar.

![button](../static/img/screenshots/loadingIndicator.jpg)

## Exemplo

### Fonte

```javascript
<LoadingIndicator variant="button" />
<LoadingIndicator variant="circular" />
<LoadingIndicator variant="linear" />
```

## Atributos

| Formato            | Conceito                                                                                                | Tipo                 |
| ------------------ | ------------------------------------------------------------------------------------------------------- | -------------------- |
| **children?** | Elementos filhos do componente.                                                     | **React.ReactNode** |
| **contrast?**      | Define se o estilo usa contraste.             | **boolean**  |
| **key?** 	| Define a chave do componente. 	| **number, string** 	|
| **large?**      | Define se o componente é maior que o padrão.             | **boolean**  |
| **variant?**      | Define a variância visual do componente, podendo ser: **button, circle ou linear**             | **string**  |

<!-- Documentation end -->
