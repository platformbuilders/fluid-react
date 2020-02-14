import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';

Icon.loadFont();
configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({});
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
