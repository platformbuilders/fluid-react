---
id: native.component.avatar
title: Avatar
---

<!-- Component declaration begin -->

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de avatares dentro de uma aplicação.

### Visualização
> Não é possível renderizar componentes React Native diretamente na web, portanto, serão mostradas prints para exemplificar.

![avatar](../static/img/screenshots/avatar.png)

## Exemplo

### Fonte

```javascript
<Avatar
  accessibility=""
  id="61251953"
  accessibilityLabel="Avatar"
  borderColor="#e6d820"
  borderWidth={4}
  children={<Text>IY</Text>}
  displayCamera={false}
  image="https://avatars3.githubusercontent.com/u/61251953?s=460&u=0629bc9a136959d3c36d29df56c029881f834fcd&v=4"
  key="0629bc9a136959d3c36d29df56c029881f834fcd"
  onPress={() => {}}
  onUpload={() => {}}
  size={moderateScale(80)}
  testID="61251953"
/>
```


## Atributos

| Formato            | Conceito                                                                                                | Tipo                 |
| ------------------ | ------------------------------------------------------------------------------------------------------- | -------------------- |
| **accessibility**       | Aqui é declarada a acessibilidade.       | **string**   |
| **id**         | ID do componente. | **string**    |
| **accessibilityLabel**      | Define a palavra de acessibilidade.             | **string**  |
| **borderColor?**    | Define a cor da borda.                                                          | **string** |
| **borderWidth?**    | Define a largura da borda  | **number**   |
| **children?** | Elementos filhos do componente.                                                     | **React.ReactNode** |
| **displayCamera?** | Define se a câmera deve ser ligada (quando ligada renderiza dentro do componente a visão da câmera).       | **boolean** |
| **image?** | Define a imagem a ser renderizada, o que pode ser uma *URL* ou o caminho de uma imagem local.                  | **string** |
| **key?** 	| Define a chave do componente. 	| **number, string** 	|
| **onPress?**   | Evento disparado quando componente é pressionado. Quando evocado, chama uma função. | **function**        |
| **onUpload?**   | Evento disparado quando componente é atualizado. Quando evocado, chama uma função. | **function**        |
| **ref?**   | Define uma referência no componente. | **any**        |
| **showBorder?**   | Define se é para mostrar a borda do avatar. | **boolean**        |
| **size?**   | Define o tamanho do componente. | **number**        |
| **testID?**   | ID do componente quando utilizada em testes. | **string**        |




<!-- Documentation end -->


