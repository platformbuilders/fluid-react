---
id: native.component.icon
title: Icon
---

<!-- Component declaration begin -->

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de ícones dentro de uma aplicação.

### Visualização
> Não é possível renderizar componentes React Native diretamente na web, portanto, serão mostradas prints para exemplificar.

![icon](../static/img/screenshots/icon.jpg)

## Exemplo

### Fonte

```javascript
<Icon
  accessibility="Ícone de milho"
  id="2r032178"
  name="corn"
  color="#f52"
/>
<Icon
  accessibility="Ícone de vaca"
  id="2r032179"
  name="cow"
  color="#61f"
/>
```

## Atributos

| Formato            | Conceito                                                                                                | Tipo                 |
| ------------------ | ------------------------------------------------------------------------------------------------------- | -------------------- |
| **accessibility**       | Aqui é declarada a acessibilidade.       | **string**   |
| **id**         | ID do componente. | **string**    |
| **name**      | Nome do ícone a ser renderizado, é proveniente dos ícones do [**Material Community Icons**](https://oblador.github.io/react-native-vector-icons/).     | **string**     |
| **accessibilityLabel?**       | Aqui é declarada a acessibilidade para quando for háptico.       | **string**   |
| **backgroundColor?**       | Aqui é declarada a cor de fundo quando for um SGV.       | **string**   |
| **borderColor?**       | Aqui é declarada a cor de borda quando for um SGV.       | **string**   |
| **children?** | Elementos filhos do componente.                                                     | **React.ReactNode** |
| **color?**       | Aqui é declarada a cor do ícone.       | **string**   |
| **disabled?**       | Define s está habilitado ou não para pressionar.       | **boolean**   |
| **haptic?**       | Define as configurações hápticas do componente, podendo ser: *impact*, *notification*, *selection*, *impactLight*, *impactMedium*, *impactHeavy*, *notificationError*, *notificationSuccess*, *notificationWarning*, *undefined*.       | **string**   |
| **hitSlop?**       | Define as configurações visuais de quando o componente é pressionado.       | **HitSlopType**   |
| **key?** 	| Define a chave do componente. 	| **number, string** 	|
| **size?** 	| Define o tamanho do ícone. 	| **number** 	|
| **style?** 	| Define o estilo do ícone. 	| **any** 	|
| **testID?** 	| ID do componente de teste. 	| **string** 	|
| **touchable?** 	| Define se o componente é tocável. 	| **boolean** 	|

<!-- Documentation end -->
