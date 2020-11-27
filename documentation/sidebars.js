module.exports = {
  someSidebar: {
    Web: [{
      Começando: ['introduction.introduction'],
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
    Native: [
      'native.component.avatar',
      'native.component.button'
    ]
  }  
};
