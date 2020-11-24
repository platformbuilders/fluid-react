import React, { FC, useState, useEffect, useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import { isEmpty } from 'lodash';
import { usePrevious } from '../../utils/hooks';
import { isIOS } from '../../utils/helpers/isIOS';
import { TextInputType, InputStatus, TypographyVariants } from '../../types';

import MaskedTextInput from './MaskedTextInput';
import {
  Label,
  Wrapper,
  BottomLine,
  InputAreaWrapper,
  Icon,
  LABEL_UPPER_STYLE,
  LABEL_LOWER_STYLE,
} from './styles';
import FormError from '../FormError';

const TextInput: FC<TextInputType> = ({
  id,
  accessibility,
  accessibilityLabel,
  testID,
  large = false,
  contrast = false,
  centered = false,
  borderless = false,
  multiline = false,
  autoFocus = false,
  allowFontScaling = false,
  keyboardType = 'default',
  iconSize = 20,
  iconTouchableEnabled = false,
  status = InputStatus.Default,
  maskType = null,
  iconName = '',
  label = '',
  value = '',
  placeholder = '',
  error = '',
  style = {},
  textStyle = {},
  iconHitSlop = {},
  inputRef = useRef(null),
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
  const [isPlaceholder, setIsPlaceHolder] = useState(true);
  const previousValue = usePrevious<string>(value || '');
  const labelVariant: TypographyVariants = large ? 'subhead' : 'footnote';
  const textVariant: TypographyVariants = large ? 'title2' : 'headline';
  const placeholderVariant: TypographyVariants = large ? 'title3' : 'body';

  const animateComponent = useCallback(
    (updatedLabelStyle: any): void => {
      const animations = Object.keys(updatedLabelStyle).map((animationProp) =>
        Animated.timing(labelAnimatedStyle[animationProp], {
          toValue: updatedLabelStyle[animationProp],
          duration: 200,
          useNativeDriver: false,
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

  const handleOnFocus = (event: any): void => {
    if (isPlaceholder) {
      setIsPlaceHolder(false);
      animationUp();
    }
    onFocus(event);
  };

  const handleOnBlur = (event: any): void => {
    const isEmptyLabel = label === '';
    if (!value && !isEmptyLabel) {
      setIsPlaceHolder(true);
      animationDown();
    }
    if (isEmptyLabel) {
      setIsPlaceHolder(false);
    }
    onBlur(event);
  };

  const renderTextInput = (inputStatus: string): JSX.Element => {
    const renderPlaceholder = !value && !isPlaceholder ? placeholder : '';

    const textInputProps = {
      id,
      accessibility,
      accessibilityLabel,
      testID,
      large,
      variant: textVariant,
      centered,
      contrast,
      borderless,
      multiline,
      value,
      keyboardType,
      onChangeText,
      allowFontScaling,
      isPlaceholder,
      status: inputStatus,
      placeholder: renderPlaceholder,
      style: textStyle,
      onBlur: handleOnBlur,
      onFocus: handleOnFocus,
      autoFocus,
      underlineColorAndroid: 'transparent',
      ...rest,
    };

    return (
      <MaskedTextInput
        inputRef={inputRef}
        maskType={maskType || 'no-mask'}
        accessibilityLabel={accessibilityLabel || accessibility}
        testID={testID || id}
        {...textInputProps}
      />
    );
  };

  const setAnimation = () => {
    const wasEmpty = previousValue?.length === 0;
    if (value && value.length && wasEmpty) {
      animationUp();
    }
    if (label === '') {
      setIsPlaceHolder(false);
    }
  };

  const focusInputElement = (element: any) => {
    const delay = isIOS() ? 0 : 5;
    setTimeout(() => {
      element.focus();
    }, delay);
  };

  const checkFocus = () => {
    let element = inputRef?.current;
    if (autoFocus) {
      if (maskType) {
        // eslint-disable-next-line no-underscore-dangle
        element = inputRef?.current?._inputElement;
      }
      focusInputElement(element);
    }
  };

  useEffect(() => {
    setAnimation();
  }, [value, previousValue]);

  useEffect(() => {
    checkFocus();
  }, []); // mount only

  const hasError = !isEmpty(error);

  const icon = iconName;
  const renderStatus = hasError ? InputStatus.Failure : status;

  return (
    <Wrapper style={style} multiline={multiline}>
      <FormError
        id={id}
        accessibility={accessibility}
        centered={centered}
        error={error}
        large={large}
      >
        {!centered && (
          <Label
            status={status}
            contrast={contrast}
            style={labelAnimatedStyle}
            variant={isPlaceholder ? placeholderVariant : labelVariant}
            testID={`error_${id}`}
            accessibilityLabel={`Erro ${accessibility}`}
          >
            {label}
          </Label>
        )}
        <InputAreaWrapper multiline={multiline}>
          {renderTextInput(renderStatus)}
          {!isEmpty(icon) && (
            <Icon
              id={`id_${icon}`}
              accessibility={`icon_${accessibility}`}
              size={iconSize}
              name={icon || ''}
              contrast={contrast}
              error={hasError}
              touchable={iconTouchableEnabled}
              onPress={onPressIcon}
              hitSlop={iconHitSlop}
            />
          )}
        </InputAreaWrapper>
        {!borderless && <BottomLine status={status} contrast={contrast} />}
      </FormError>
    </Wrapper>
  );
};

export default TextInput;
