import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';
import { ThemeContext } from '../ThemeContext';
import { Wrapper, Image, CameraView } from './styles';

const defaultAvatar =
  'https://qph.fs.quoracdn.net/main-qimg-54075e2b6df5d93405b85ee3a77e6098';

interface Props {
  image: string;
  showBorder?: boolean;
  borderWidth?: number;
  borderColor?: string;
  displayCamera?: boolean;
  size?: number;
  onPress?: (x: any) => void;
  onUpload?: (x: any) => any;
  id: string;
  accessibility: string;
  accessibilityLabel?: string;
  testID?: string;
}

interface State {
  uploadedImage: string;
}

class Avatar extends React.Component<Props, State> {
  state = {
    uploadedImage: '',
  };

  camera: any;

  openPicker = (): Promise<void> => {
    const options = {
      title: 'Selecionar foto',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'Tirar foto',
      chooseFromLibraryButtonTitle: 'Escolher da galeria',
      quality: 0.3,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    return new Promise((resolve) => {
      ImagePicker.launchImageLibrary(options, (response) => {
        this.setState({ uploadedImage: response.uri });
        resolve();
      });
    });
  };

  handleUploaded = (image: any): void => {
    const { onUpload } = this.props;
    if (image && !image.didCancel && onUpload) {
      onUpload(image);
    }
  };

  takePicture = async (): Promise<void> => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({ uploadedImage: data });
      return data;
    }
  };

  getUploadImage = (): any => {
    const { uploadedImage } = this.state;
    return uploadedImage;
  };

  clearUploadImage = (): void => {
    this.setState({ uploadedImage: '' });
  };

  render(): JSX.Element {
    const {
      id,
      accessibility = 'Upload de Avatar',
      accessibilityLabel,
      testID,
      image = null,
      size = 50,
      onPress,
      showBorder = true,
      displayCamera = false,
      ...rest
    } = this.props;
    const { uploadedImage } = this.state;
    return (
      <ThemeContext.Consumer>
        {({ theme }): JSX.Element => (
          <ThemeProvider theme={theme}>
            <Wrapper
              id={id}
              accessibility={accessibility}
              accessibilityLabel={accessibilityLabel || accessibility}
              testID={testID || id}
              size={size}
              onPress={onPress}
              disabled={!onPress}
              showBorder={showBorder}
              {...rest}
            >
              {displayCamera && !uploadedImage ? (
                <CameraView
                  ref={(ref): void => {
                    this.camera = ref;
                  }}
                  size={size}
                  type={RNCamera.Constants.Type.front}
                  flashMode={RNCamera.Constants.FlashMode.auto}
                  androidCameraPermissionOptions={{
                    title: 'Camera',
                    message: 'Precisamos da sua permissão para usar a camera.',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancelar',
                  }}
                />
              ) : (
                <Image
                  source={
                    uploadedImage
                      ? { uri: uploadedImage }
                      : { uri: image } || defaultAvatar
                  }
                />
              )}
            </Wrapper>
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Avatar;
