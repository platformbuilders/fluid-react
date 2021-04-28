import React, { useState, useRef, useImperativeHandle } from 'react';
import { isEmpty } from 'lodash';
import { RNCamera } from 'react-native-camera';
import FastImage, { Source } from 'react-native-fast-image';
import ImagePicker from 'react-native-image-picker';
import If from '../If';
import { ImageAvatarPlaceholder as defaultAvatar } from '../../assets/images';
import { Wrapper, CameraView, UploadIconWrapper, UploadIcon } from './styles';

type Props = {
  ref?: any;
  image?: string;
  showBorder?: boolean;
  borderWidth?: number;
  borderColor?: string;
  displayCamera?: boolean;
  size?: number;
  onPress?: (x: any) => void;
  onUpload?: (x: any) => any;
  id?: string;
  accessibility: string;
  accessibilityLabel?: string;
  testID?: string;
};

const Avatar: React.FC<Props> = React.forwardRef(
  (
    {
      id,
      image = defaultAvatar,
      accessibility = 'Upload de Avatar',
      accessibilityLabel,
      testID,
      size = 50,
      onPress,
      onUpload,
      showBorder = true,
      displayCamera = false,
      ...rest
    },
    ref,
    // eslint-disable-next-line sonarjs/cognitive-complexity
  ) => {
    const [uploadedImage, setUploadedImage] = useState<any>();
    const cameraRef = useRef<any>();

    const openPicker = (): Promise<void> => {
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
        ImagePicker.launchImageLibrary(options as any, (response: any) => {
          setUploadedImage(response.uri);
          if (onUpload) {
            onUpload(response.uri);
          }
          resolve();
        });
      });
    };

    const takePicture = async (): Promise<void> => {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        setUploadedImage(data);
        return data;
      }
    };

    const getUploadImage = (): any => {
      return uploadedImage;
    };

    const clearUploadImage = (): void => {
      setUploadedImage('');
    };

    const getCurrentAvatar = (): Source | any => {
      if (uploadedImage) {
        return { uri: uploadedImage };
      }
      if (image && !isEmpty(image)) {
        return { uri: image };
      }
      return defaultAvatar;
    };

    useImperativeHandle(ref, () => ({
      getUploadImage,
      clearUploadImage,
      takePicture,
      openPicker,
    }));

    return (
      <Wrapper
        id={id || accessibility}
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
            ref={cameraRef}
            size={size}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.auto}
            androidCameraPermissionOptions={{
              title: 'Câmera',
              message: 'Precisamos da sua permissão para usar a câmera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancelar',
            }}
          />
        ) : (
          <FastImage
            source={getCurrentAvatar()}
            resizeMode={FastImage.resizeMode.cover}
            style={{ width: '101%', height: '101%' }}
          />
        )}
        <If condition={!!displayCamera}>
          <UploadIconWrapper size={size}>
            <UploadIcon id="" accessibility="" />
          </UploadIconWrapper>
        </If>
      </Wrapper>
    );
  },
);

Avatar.displayName = 'AvatarComponent';

export default Avatar;
