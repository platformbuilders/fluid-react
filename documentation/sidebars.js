module.exports = {
  someSidebar: {
    Web: [{
      Começando: ['introduction.web'],
      Componentes: [
        {
          Avatar: [
            'component.avatar',
            {
              Atributos: [
                'component.avatar.attributes.alt',
                'component.avatar.attributes.children',
                'component.avatar.attributes.key',
                'component.avatar.attributes.onPress',
                'component.avatar.attributes.src',
                'component.avatar.attributes.variant',
              ],
            },
          ],
        },
        'component.button',
        'component.checkBox',
        'component.formContainer',
        'component.formError',
        'component.icon',
        'component.loadingIndicator',
        'component.paper',
        'component.Select',
        'component.textInput',
        {
          Typography: [
            'component.typography',
            'component.typography.styleGuide'
          ]
        }
      ],
    }],
    Native: [{
      Começando: ['introduction.native'],
      Componentes: [
        'native.component.accordion',
        'native.component.avatar',
        'native.component.button',
        'native.component.checkBox',
        'native.component.fab',
        'native.component.formError',
        'native.component.icon',
        'native.component.if',
        'native.component.link',
        'native.component.loadingIndicator',
        'native.component.pinInput',
        'native.component.radioButton',
        'native.component.searchButton',
        'native.component.touchable'
      ]
    }]
  }  
};
