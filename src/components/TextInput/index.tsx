import React, { FC, useState, useEffect, useCallback, useContext } from 'react';
import { Animated, TextInputProps as RNTextInputProps } from 'react-native';
import { isEmpty } from 'lodash';
import { INPUT_STATUS } from '~/utils/enums';
import { Icon, FormError } from '~/components';
import { colors } from '~/theme';
import TextInputMask from './TextInputMask';
import {
  Label,
  Wrapper,
  TextInput,
  BottomLine,
  InputAreaWrapper,
  LABEL_UPPER_STYLE,
  LABEL_LOWER_STYLE,
} from './styles';
import { TextInputProps } from './types';
import { usePrevious } from '~/utils/hooks';
import { ThemeContext } from '../ThemeContext';
import { ThemeProvider } from 'styled-components';

type Props = TextInputProps & RNTextInputProps;

// eslint-disable-next-line sonarjs/cognitive-complexity
const AnimatedTextInput: FC<Props> = (props) => {
  const {
    dark = false,
    multiline = false,
    style,
    label,
    labelStyle,
    error,
    status: statusProp,
    iconName,
    iconSize,
    onPressIcon,
    iconTouchableEnabled,
    iconHitSlop,
  } = props;
  const [labelAnimatedStyle] = useState({
    top: new Animated.Value(LABEL_LOWER_STYLE.top),
    fontSize: new Animated.Value(LABEL_LOWER_STYLE.fontSize),
  });
  const { theme } = useContext(ThemeContext);

  const [isPlaceholder, setIsPlaceHolder] = useState(true);

  const animateComponent = useCallback(
    (labelStyle: any): void => {
      const animations = Object.keys(labelStyle).map((animationProp) =>
        Animated.timing(labelAnimatedStyle[animationProp], {
          toValue: labelStyle[animationProp],
          duration: 200,
        }),
      );
      Animated.parallel(animations).start();
    },
    [labelAnimatedStyle],
  );

  const animationUp = (): void => {
    animateComponent(LABEL_UPPER_STYLE);
  };

  const animationDown = (): void => {
    animateComponent(LABEL_LOWER_STYLE);
  };

  const getIconColor = (hasError: boolean): string => {
    if (hasError) {
      return colors.failure;
    }

    return colors.primary.contrast;
  };

  const handleOnFocus = (): void => {
    const { onFocus } = props;
    if (isPlaceholder) {
      setIsPlaceHolder(false);
      animationUp();
    }
    if (onFocus) {
      onFocus();
    }
  };

  const handleOnBlur = (): void => {
    const { onBlur, value } = props;
    if (!value) {
      setIsPlaceHolder(true);
      animationDown();
    }
    if (onBlur) {
      onBlur();
    }
  };

  const renderTextInput = (hasError: any): JSX.Element => {
    const {
      value,
      status: statusProp,
      maskType,
      textStyle,
      placeholder: placeholderProp,
      onChangeText,
      multiline = false,
      dark = false,
      keyboardType = 'default',
      ...rest
    } = props;

    const status = hasError ? INPUT_STATUS.FAILURE : statusProp;
    const placeholder = !value && !isPlaceholder ? placeholderProp : '';

    const textInputProps = {
      ...rest,
      dark,
      multiline,
      value,
      status,
      keyboardType,
      placeholder,
      style: textStyle,
      underlineColorAndroid: 'transparent',
      onBlur: handleOnBlur,
      onFocus: handleOnFocus,
      onChangeText,
    };

    return maskType ? (
      <TextInputMask maskType={maskType} {...textInputProps} />
    ) : (
      <TextInput {...textInputProps} />
    );
  };

  const prevValue = usePrevious<string>(props.value || '');

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    const wasEmpty = prevValue?.length === 0;
    if (props.value && props.value.length && wasEmpty) {
      animationUp();
    }
  }, [props.value, prevValue]);

  const hasError = !isEmpty(error);

  const icon = iconName;
  const iconColor = getIconColor(hasError);
  const status = hasError ? INPUT_STATUS.FAILURE : statusProp;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper style={style} multiline={multiline}>
        <FormError error={error}>
          <Label
            status={status}
            style={[labelStyle, labelAnimatedStyle]}
            dark={dark}
            isPlaceholder={isPlaceholder}
          >
            {label}
          </Label>
          <InputAreaWrapper multiline={multiline}>
            {renderTextInput(hasError)}
            {!isEmpty(icon) && (
              <Icon
                size={iconSize}
                name={icon || ''}
                color={iconColor}
                touchable={iconTouchableEnabled}
                onPress={onPressIcon}
                hitSlop={iconHitSlop}
              />
            )}
          </InputAreaWrapper>
          <BottomLine dark={dark} status={status} />
        </FormError>
      </Wrapper>
    </ThemeProvider>
  );
};

AnimatedTextInput.defaultProps = {
  dark: false,
  multiline: false,
  secureTextEntry: false,
  autoFocus: false,
  iconSize: 20,
  iconTouchableEnabled: false,
  status: INPUT_STATUS.DEFAULT,
  iconName: null,
  maskType: null,
  label: '',
  value: '',
  placeholder: '',
  error: '',
  style: {},
  textStyle: {},
  labelStyle: {},
  iconHitSlop: {},
  onBlur: (): void => {},
  onFocus: (): void => {},
  onChangeText: (): void => {},
  onPressIcon: (): void => {},
};

export default AnimatedTextInput;
