import { DisplayToast } from '~/utils/modules';

type MessageType =
  | 'none'
  | 'default'
  | 'info'
  | 'success'
  | 'danger'
  | 'warning';

const showAlert = (message: string, type: MessageType = 'info'): void => {
  DisplayToast({
    message,
    type,
    icon: type,
  });
};

export default showAlert;
