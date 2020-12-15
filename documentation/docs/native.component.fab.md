---
id: native.component.fab
title: FAB
---

<!-- Component declaration begin -->

<!-- Component declaration end -->

<!-- Documentation begin -->

FAB (Floating Action Button), esse componente tem como função auxiliar na manipulação, manutenção e padronização de botões de ação flutuantes dentro de uma aplicação.

### Visualização
> Não é possível renderizar componentes React Native diretamente na web, portanto, serão mostradas prints para exemplificar.

![button](../static/img/screenshots/fab.jpg)

## Exemplo

### Fonte

```javascript
<FAB
  title="Add"
  accessibility="Botão de ação flutuante para adicionar"
  id="fab_add"
  onPress={() => {}}
  color="#F9BD00"
  hasShadow
  iconColor="#FFF"
  iconSize={27}
/>
```


## Atributos

| Formato            | Conceito                                                                                                | Tipo                 |
| ------------------ | ------------------------------------------------------------------------------------------------------- | -------------------- |
| **accessibility**       | Aqui é declarada a acessibilidade.       | **string**   |
| **id**         | ID do componente. | **string**    |
| **onPress**   | Evento disparado quando componente é pressionado. Quando evocado, chama uma função. | **function**        |
| **children?** | Elementos filhos do componente.                                                     | **React.ReactNode** |
| **color?** 	| Define a cor de fundo do botão. 	| **string** 	|
| **hasShadow?**      | Define se o botão tem sombreamento.             | **boolean**  |
| **iconColor?** 	| Define a cor do ícone do botão. 	| **string** 	|
| **iconName?** 	| Define o ícone do botão,  vem do [**Material Community Icons**](https://oblador.github.io/react-native-vector-icons/). 	| **string** 	|
| **iconSize?** 	| Define o tamanho do ícone do botão. 	| **number** 	|
| **key?** 	| Define a chave do componente. 	| **number, string** 	|
| **relativePos?**      | Define se a posição do botão é relativa.             | **boolean**  |
| **size?** 	| Define o tamanho do botão. 	| **number** 	|
| **title?** 	| Define uma espécie de título dentro do botão na cor branca. 	| **string** 	|

<!-- Documentation end -->
