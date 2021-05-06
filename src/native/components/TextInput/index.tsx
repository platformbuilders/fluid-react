import React, { FC, useState, useEffect, useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import { isEmpty } from 'lodash';
import { usePrevious } from '../../utils/hooks';
import { TextInputType, InputStatus, TypographyVariants } from '../../types';

import MaskedTextInput from './MaskedTextInput';
import {
  Label,
  FixedLabel,
  Wrapper,
  BottomLine,
  BorderedWrapper,
  InputBorderedAreaWrapper,
  InputAreaWrapper,
  Icon,
  LABEL_UPPER_STYLE,
  LABEL_LOWER_STYLE,
  InputBorderedColumnWrapper,
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
  iconNameBordered = '',
  iconName = '',
  label = '',
  value = '',
  placeholder = '',
  error = '',
  style = {},
  textStyle = {},
  labelStyle = {},
  iconHitSlop = {},
  inputRef = useRef(null),
  onBlur = (): any => {},
  onFocus = (): any => {},
  onChangeText = (): any => {},
  onPressIcon = (): any => {},
  leftIcon = false,
  iconColor,
  inputPadding,
  bordered,
  borderedHeight,
  borderedColor,
  borderedRadius,
  fixedLabelVariant = 'caption',
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
        testID={testID || id || accessibility}
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

  useEffect(() => {
    setAnimation();
  }, [value, previousValue]);

  const hasError = !isEmpty(error);

  const icon = iconName;
  const iconBordered = iconNameBordered;
  const renderStatus = hasError ? InputStatus.Failure : status;

  const renderIcon = (iconProp: string) => (
    <Icon
      id={`id_${iconProp}`}
      accessibility={`icon_${accessibility}`}
      size={iconSize}
      name={iconProp || ''}
      contrast={contrast}
      error={hasError}
      touchable={iconTouchableEnabled}
      onPress={onPressIcon}
      hitSlop={iconHitSlop}
      leftIcon={leftIcon}
      iconColor={iconColor}
    />
  );

  return (
    <Wrapper style={style} multiline={multiline}>
      <FormError
        id={id || accessibility}
        accessibility={accessibility}
        centered={centered}
        error={error}
        large={large}
      >
        <BorderedWrapper
          bordered={bordered}
          borderedHeight={borderedHeight}
          borderedColor={borderedColor}
          borderedRadius={borderedRadius}
          error={error}
        >
          {!centered && !bordered && (
            <Label
              status={status}
              contrast={contrast}
              style={[labelAnimatedStyle, labelStyle]}
              variant={isPlaceholder ? placeholderVariant : labelVariant}
              testID={`error_${id || accessibility}`}
              accessibilityLabel={`Erro ${accessibility}`}
            >
              {label}
            </Label>
          )}
          {bordered ? (
            <InputBorderedAreaWrapper>
              {!isEmpty(iconBordered) && renderIcon(iconBordered)}
              <InputBorderedColumnWrapper
                multiline={multiline}
                padding={inputPadding}
              >
                <FixedLabel variant={fixedLabelVariant}>{label}</FixedLabel>
                {renderTextInput(renderStatus)}
              </InputBorderedColumnWrapper>
              {!isEmpty(icon) && renderIcon(icon)}
            </InputBorderedAreaWrapper>
          ) : (
            <InputAreaWrapper multiline={multiline}>
              {bordered && <FixedLabel>{label}</FixedLabel>}
              {leftIcon && !isEmpty(icon) && renderIcon(icon)}
              {renderTextInput(renderStatus)}
              {!leftIcon && !isEmpty(icon) && renderIcon(icon)}
            </InputAreaWrapper>
          )}

          {!borderless && <BottomLine status={status} contrast={contrast} />}
        </BorderedWrapper>
      </FormError>
    </Wrapper>
  );
};

export default TextInput;
