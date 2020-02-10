import React, { FC, useState, useEffect, useCallback, useContext } from 'react';
import { Animated, TextInputProps as RNTextInputProps } from 'react-native';
import { isEmpty } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { Icon, FormError } from '~/components';
import { INPUT_STATUS } from '~/utils/enums';
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
import If from '../If';

type Props = TextInputProps & RNTextInputProps;

const AnimatedTextInput: FC<Props> = ({
  dark = false,
  multiline = false,
  keyboardType = 'default',
  iconSize = 20,
  iconTouchableEnabled = false,
  status = INPUT_STATUS.DEFAULT,
  iconName = null,
  maskType = null,
  label = '',
  value = '',
  placeholder = '',
  error = '',
  style = {},
  textStyle = {},
  labelStyle = {},
  iconHitSlop = {},
  onBlur = (): any => {},
  onFocus = (): any => {},
  onChangeText = (): any => {},
  onPressIcon = (): any => {},
  ...rest
  // eslint-disable-next-line sonarjs/cognitive-complexity
}) => {
  const [labelAnimatedStyle] = useState({
    top: new Animated.Value(LABEL_LOWER_STYLE.top),
    fontSize: new Animated.Value(LABEL_LOWER_STYLE.fontSize),
  });
  const { theme } = useContext(ThemeContext);

  const [isPlaceholder, setIsPlaceHolder] = useState(true);

  const animateComponent = useCallback(
    (updatedLabelStyle: any): void => {
      const animations = Object.keys(updatedLabelStyle).map((animationProp) =>
        Animated.timing(labelAnimatedStyle[animationProp], {
          toValue: updatedLabelStyle[animationProp],
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
    if (isPlaceholder) {
      setIsPlaceHolder(false);
      animationUp();
    }
    if (onFocus) {
      onFocus();
    }
  };

  const handleOnBlur = (): void => {
    if (!value) {
      setIsPlaceHolder(true);
      animationDown();
    }
    if (onBlur) {
      onBlur();
    }
  };

  const renderTextInput = (inputStatus: string): JSX.Element => {
    const renderPlaceholder = !value && !isPlaceholder ? placeholder : '';

    const textInputProps = {
      ...rest,
      dark,
      multiline,
      value,
      keyboardType,
      onChangeText,
      status: inputStatus,
      placeholder: renderPlaceholder,
      style: textStyle,
      onBlur: handleOnBlur,
      onFocus: handleOnFocus,
      underlineColorAndroid: 'transparent',
    };

    return maskType ? (
      <TextInputMask maskType={maskType} {...textInputProps} />
    ) : (
      <TextInput {...textInputProps} />
    );
  };

  const previousValue = usePrevious<string>(value || '');

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    const wasEmpty = previousValue?.length === 0;
    if (value && value.length && wasEmpty) {
      animationUp();
    }
  }, [value, previousValue]);

  const hasError = !isEmpty(error);

  const icon = iconName;
  const iconColor = getIconColor(hasError);
  const renderStatus = hasError ? INPUT_STATUS.FAILURE : status;

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
            {renderTextInput(renderStatus)}
            <If condition={!isEmpty(icon)}>
              <Icon
                size={iconSize}
                name={icon || ''}
                color={iconColor}
                touchable={iconTouchableEnabled}
                onPress={onPressIcon}
                hitSlop={iconHitSlop}
              />
            </If>
          </InputAreaWrapper>
          <BottomLine dark={dark} status={status} />
        </FormError>
      </Wrapper>
    </ThemeProvider>
  );
};

export default AnimatedTextInput;
