---
id: native.component.touchable
title: Touchable
---

<!-- Component declaration begin -->

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de elementos "tocáveis" dentro de uma aplicação.

### Visualização
> Não é possível renderizar componentes React Native diretamente na web, portanto, serão mostradas prints para exemplificar.

![button](../static/img/screenshots/touchable.jpg)

## Exemplo

### Fonte

```javascript
<Touchable accessibility="Ir para detalhes" id="touch_details">
  <View
    style={{
      backgroundColor: '#812164',
      padding: 20,
      borderTopEndRadius: 20,
      borderBottomLeftRadius: 20,
    }}
  >
    <Text style={{ color: '#fff' }}>Ver detalhes</Text>
  </View>
</Touchable>
```


## Atributos

| Formato            | Conceito                                                                                                | Tipo                 |
| ------------------ | ------------------------------------------------------------------------------------------------------- | -------------------- |
| **accessibility**       | Aqui é declarada a acessibilidade.       | **string**   |
| **id**         | ID do componente. | **string**    |
| **accessibilityLabel**      | Define a palavra de acessibilidade.             | **string**  |
| **children?**    | Elementos filhos do componente.                                                          | **string** |
| **disabled?** | Define se o botão está pressionável ou não.       | **boolean** |
| **children?** | Elementos filhos do componente.                                                     | **React.ReactNode** |
| **haptic?** | Define o tipo de resposta tátil, podendo ser: **impact, notification, selection, impactLight, impactMedium, impactHeavy, notificationError, notificationSuccess, notificationWarning, undefined**. |  **string** |
| **key?** 	| Define a chave do componente. 	| **number, string** 	|
| **onPress?**   | Evento disparado quando componente é pressionado. Quando evocado, chama uma função. | **function**        |
| **testID?**   | ID do componente quando utilizada em testes. | **string**        |

<!-- Documentation end -->
