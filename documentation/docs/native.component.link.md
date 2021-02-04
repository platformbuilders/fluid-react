---
id: native.component.link
title: Link
---

<!-- Component declaration begin -->

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de links dentro de uma aplicação.

### Visualização
> Não é possível renderizar componentes React Native diretamente na web, portanto, serão mostradas prints para exemplificar.

![button](../static/img/screenshots/link.jpg)

## Exemplo

### Fonte

```javascript
<Link accessibility="Link" id="a3r30r7" variant="headline">
  Clique aqui!
</Link>
```

## Atributos

| Formato            | Conceito                                                                                                | Tipo                 |
| ------------------ | ------------------------------------------------------------------------------------------------------- | -------------------- |
| **accessibility**       | Aqui é declarada a acessibilidade.       | **string**   |
| **id**         | ID do componente. | **string**    |
| **accessibilityLabel**       | Aqui é declarada o rótulo da acessibilidade.       | **string**   |
| **children?** | Elementos filhos do componente.                                                     | **React.ReactNode** |
| **disabled?**      | Define está desabilitado.             | **boolean**  |
| **haptic?** | Define o tipo de resposta tátil.                  | **"impact", "notification", "selection", "impactLight", "impactMedium", "impactHeavy", "notificationError", "notificationSuccess", "notificationWarning", undefined**
| **key?** 	| Define a chave do componente. 	| **number, string** 	|
| **onPress?**   | Evento disparado quando componente é pressionado. Quando evocado, chama uma função. | **function**        |
| **style?**   | Define o estilo do elemento. | **StyleProp< ViewStyle >**        |
| **testID?**   | ID do componente quando utilizada em testes. | **string**        |
| **variant?**   | Define o estilo de texto. | **StyleProp< ViewStyle >**        |

<!-- Documentation end -->
