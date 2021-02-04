---
id: native.component.formError
title: FormError
---

<!-- Component declaration begin -->

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização de erros em formulários dentro de uma aplicação.

### Visualização
> Não é possível renderizar componentes React Native diretamente na web, portanto, serão mostradas prints para exemplificar.

![button](../static/img/screenshots/formError.jpg)

O componente é bem simples mesmo, um exemplo de aplicação mais real pode ser visto no elemento [**CheckBox**](./native.component.checkBox), onde há um erro hipotético em formulário.

## Exemplo

### Fonte

```javascript
<FormError
  accessibility="Erro em formulário"
  centered
  error="Use apenas caracteres maiúsculos!"
  id="r231534ft42"
  large
/>
```

## Atributos

| Formato            | Conceito                                                                                                | Tipo                 |
| ------------------ | ------------------------------------------------------------------------------------------------------- | -------------------- |
| **accessibility**       | Aqui é declarada a acessibilidade.       | **string**   |
| **centered?**      | Define se o componente é centralizado.             | **boolean**  |
| **children?** | Elementos filhos do componente.                                                     | **React.ReactNode** |
| **error?** | Define a mensagem de erro em vermelho.          | **string, boolean, string[], undefined** |
| **id**         | ID do componente. | **string**    |
| **key?** 	| Define a chave do componente. 	| **number, string** 	|
| **large?**      | Define se o componente tem um aspecto maior que o normal.             | **boolean**  |

<!-- Documentation end -->
