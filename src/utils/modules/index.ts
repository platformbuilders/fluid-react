import * as FormValidator from 'yup';
import * as CNPJ from '@fnando/cnpj';
import * as CPF from '@fnando/cpf';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-BR');

export { FormValidator, CPF, CNPJ };
export { Formik as FormBehavior } from 'formik';
export { moment as DateManager };
export { default as Numeral } from 'numeral';
export { lighten, darken } from 'polished';
export { TextInputMask } from 'react-native-masked-text';
export { default as Animation } from 'lottie-react-native';
export { default as Haptic } from 'react-native-haptic';
export { default as FastImage } from 'react-native-fast-image';
export { default as ImagePicker } from 'react-native-image-picker';
export {
  default as ToastMessage,
  showMessage as DisplayToast,
  hideMessage as HideToast,
} from 'react-native-flash-message';
export { default as CheckBox } from 'react-native-check-box';
export { default as DatePicker } from 'react-native-datepicker';
export { default as Modal } from 'react-native-modal';
export { default as Swiper } from 'react-native-swiper';
export { default as CodeInput } from 'react-native-confirmation-code-input';
export { RNCamera } from 'react-native-camera';
export { scale, verticalScale, moderateScale } from 'react-native-size-matters';
export {
  getStatusBarHeight,
  getBottomSpace,
  isIphoneX,
} from 'react-native-iphone-x-helper';
