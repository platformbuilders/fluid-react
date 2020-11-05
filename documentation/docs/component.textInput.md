---
id: component.textInput
title: TextInput
---

<!-- Component declaration begin -->

import { TextInput } from '@platformbuilders/react-ui';

<!-- Component declaration end -->

<!-- Documentation begin -->

Esse componente tem como função auxiliar na manipulação, manutenção e padronização das caixas de inserção de texto dentro de uma aplicação.

## Exemplo

<TextInput
  name="birthday"
  type='number'
  value=''
  maskType="birthdate"
/>

### Fonte

```javascript
import { TextInput } from '@platformbuilders/react-ui';

<TextInput name="birthday" type="number" value="" maskType="birthdate" />;
```

## Atributos

| Formato          | Conceito                                                                                                                                                                                    | Tipo                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| **name**         | Aqui é delcarado o nome do componente.                                                                                                                                                      | **string**                  |
| **type**         | Aqui é delcarado o tipo da inserção.                                                                                                                                                        | **string**                  |
| **value**        | Aqui é delcarado o valor que será recebido e renderizado na inserção.                                                                                                                       | **string, number, boolean** |
| **autoFocus?**   | Declarado quando for um componente de foco automático.                                                                                                                                      | **boolean**                 |
| **children?**    | Elementos filhos do componente.                                                                                                                                                             | **React.ReactNode**         |
| **error?**       | Declarado quando houver algum erro na inserção.                                                                                                                                             | **string, boolean**         |
| **fullWidth?**   | Declarado quando precisar de largura máxima.                                                                                                                                                | **boolean**                 |
| **id?**          | Aqui é delcarado a ID do componente.                                                                                                                                                        | **string**                  |
| **key?**         | Define a chave do componente.                                                                                                                                                               | **number, string**          |
| **label?**       | Define uma espécie de descrição do que está sendo inserido.                                                                                                                                 | **string**                  |
| **mask?**        | Define uma máscara customizada para a inserção.                                                                                                                                             | **string**                  |
| **maskType?**    | Define um tipo de máscara predifinido como por exemplo: data, CEP, CPF, telefone...                                                                                                         | **string**                  |
| **onBlur?**      | É o evento disparado quando o componente perde o foco, com isso, pode disparar uma outra função (recebe o _object_ evento como parâmetro).                                                  | **function**                |
| **onChange?**    | É o evento disparado quando o componente é alterado, com isso, pode disparar uma outra função (recebe o _object_ evento como parâmetro).                                                    | **function**                |
| **placeholder?** | Define uma espécie de descrição do que está sendo inserido. Diferente do _label_, este não se posiciona acima do componente em si quando houver algum conteúdo dentro da caixa de inserção. | **string**                  |

<!-- Documentation end -->
