import React, { FC, useState, useEffect, useCallback } from 'react';
import { Animated } from 'react-native';
import { isEmpty } from 'lodash';
import { colors } from '../../theme';
import { usePrevious } from '../../utils/hooks';
import { TextInput as TextInputType, InputStatus } from '../../utils/types';
import MaskedTextInput from './MaskedTextInput';
import {
  Label,
  Wrapper,
  TextInput,
  BottomLine,
  InputAreaWrapper,
  LABEL_UPPER_STYLE,
  LABEL_LOWER_STYLE,
} from './styles';
import Icon from '../Icon';
import FormError from '../FormError';

const AnimatedTextInput: FC<TextInputType> = ({
  id,
  accessibility,
  large = false,
  contrast = false,
  centered = false,
  borderless = false,
  multiline = false,
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
  inputRef = React.createRef(),
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
      ...rest,
      id,
      accessibility,
      large,
      centered,
      contrast,
      borderless,
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
      <MaskedTextInput
        id={id}
        inputRef={inputRef}
        maskType={maskType}
        accessibilityLabel={accessibility}
        {...textInputProps}
      />
    ) : (
      <TextInput
        id={id}
        ref={inputRef}
        accessibilityLabel={accessibility}
        {...textInputProps}
      />
    );
  };

  const previousValue = usePrevious<string>(value || '');

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    const wasEmpty = previousValue?.length === 0;
    if (value && value.length && wasEmpty) {
      animationUp();
    }
    if (label === '') {
      setIsPlaceHolder(false);
    }
  }, [value, previousValue]);

  const hasError = !isEmpty(error);

  const icon = iconName;
  const iconColor = getIconColor(hasError);
  const renderStatus = hasError ? InputStatus.Failure : status;

  return (
    <Wrapper style={style} multiline={multiline}>
      <FormError centered={centered} error={error}>
        {!centered && (
          <Label
            status={status}
            contrast={contrast}
            style={labelAnimatedStyle}
            isPlaceholder={isPlaceholder}
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
              color={iconColor}
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

export default AnimatedTextInput;
