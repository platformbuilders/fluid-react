'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components/native');
var reactNativeSizeMatters = require('react-native-size-matters');
var reactNativeTypography = require('react-native-typography');
var helpers = require('@platformbuilders/helpers');
var Haptic = require('react-native-haptic');
var reactNative = require('react-native');
var lodash = require('lodash');
var reactNativeMaskedText = require('react-native-masked-text');
var MaterialIcons = require('react-native-vector-icons/MaterialCommunityIcons');
var FeatherIcons = require('react-native-vector-icons/Feather');
var EntypoIcons = require('react-native-vector-icons/Entypo');
var FontAwesomeIcons = require('react-native-vector-icons/FontAwesome');
var Fontisto = require('react-native-vector-icons/Fontisto');
var Svg = require('react-native-svg');
var Animation = require('lottie-react-native');
var DefaultCheckbox = require('react-native-check-box');
var polished = require('polished');
var DefaultDatePicker = require('react-native-datepicker');
var reactNativeCamera = require('react-native-camera');
var FastImage = require('react-native-fast-image');
var ImagePicker = require('react-native-image-picker');
var Accordion = require('react-native-collapsible/Accordion');
var Markdown = require('react-native-markdown-display');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var Haptic__default = /*#__PURE__*/_interopDefaultLegacy(Haptic);
var MaterialIcons__default = /*#__PURE__*/_interopDefaultLegacy(MaterialIcons);
var FeatherIcons__default = /*#__PURE__*/_interopDefaultLegacy(FeatherIcons);
var EntypoIcons__default = /*#__PURE__*/_interopDefaultLegacy(EntypoIcons);
var FontAwesomeIcons__default = /*#__PURE__*/_interopDefaultLegacy(FontAwesomeIcons);
var Fontisto__default = /*#__PURE__*/_interopDefaultLegacy(Fontisto);
var Svg__default = /*#__PURE__*/_interopDefaultLegacy(Svg);
var Animation__default = /*#__PURE__*/_interopDefaultLegacy(Animation);
var DefaultCheckbox__default = /*#__PURE__*/_interopDefaultLegacy(DefaultCheckbox);
var DefaultDatePicker__default = /*#__PURE__*/_interopDefaultLegacy(DefaultDatePicker);
var FastImage__default = /*#__PURE__*/_interopDefaultLegacy(FastImage);
var ImagePicker__default = /*#__PURE__*/_interopDefaultLegacy(ImagePicker);
var Accordion__default = /*#__PURE__*/_interopDefaultLegacy(Accordion);
var Markdown__default = /*#__PURE__*/_interopDefaultLegacy(Markdown);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const IOS_PLATFORM = 'ios';
const isIOS = () => reactNative.Platform.OS === IOS_PLATFORM;

const generateHaptic = (haptic = 'impact') => {
    if (isIOS()) {
        Haptic__default['default'].generate(haptic);
    }
};

const defaultColor = helpers.getTheme('primary.contrast');
const Text = styled__default['default'].Text `
  color: ${defaultColor};
`;

const Typography = (_a) => {
    var { style = [{}], variant = 'body', textRef = React__default['default'].createRef(), children, id, accessibility } = _a, rest = __rest(_a, ["style", "variant", "textRef", "children", "id", "accessibility"]);
    return (React__default['default'].createElement(Text, Object.assign({ testID: id, accessibilityLabel: accessibility, ref: textRef, style: [reactNativeTypography.human[variant], style] }, rest), children));
};

const isCentered = helpers.ifStyle('centered');
const isLarge = helpers.ifStyle('large');
const ErrorText = styled__default['default'](Typography).attrs((props) => ({
    variant: isLarge('headline', 'subhead')(props),
})) `
  color: ${helpers.getTheme('failure')};
  text-align: ${isCentered('center', 'left')};
  margin-top: ${reactNativeSizeMatters.moderateScale(3)}px;
`;

const warnBoolean = () => 
// eslint-disable-next-line no-console
console.warn(`@platformbuilders/react-native-ui: received a truthy boolean error instead of string, which won't be rendered.`);
const FormError = (_a) => {
    var { id, accessibility, error = '', centered = false, large = false, children } = _a, rest = __rest(_a, ["id", "accessibility", "error", "centered", "large", "children"]);
    if (error && typeof error === 'boolean')
        warnBoolean();
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        children,
        error && typeof error === 'string' ? (React__default['default'].createElement(ErrorText, Object.assign({ centered: centered, large: large, testID: `error_${id}`, accessibilityLabel: `Erro ${accessibility}` }, rest), error)) : null));
};

const usePrevious = (value) => {
    const ref = React.useRef();
    React.useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

(function (InputStatus) {
    InputStatus["Success"] = "SUCCESS";
    InputStatus["Failure"] = "FAILURE";
    InputStatus["Default"] = "DEFAULT";
    InputStatus["Disabled"] = "DISABLED";
})(exports.InputStatus || (exports.InputStatus = {}));

const CommonTouchable = (_a) => {
    var { onPress = () => { }, haptic = 'impact', disabled = false, accessibility, id } = _a, rest = __rest(_a, ["onPress", "haptic", "disabled", "accessibility", "id"]);
    return (React__default['default'].createElement(reactNative.TouchableOpacity, Object.assign({}, rest, { accessibilityLabel: accessibility, testID: id, disabled: disabled, onPress: (e) => {
            generateHaptic(haptic);
            onPress(e);
        } })));
};

const Profile = ({ color = '#212121', width = 18, height = 18 }) => (React__default['default'].createElement(Svg__default['default'], { width: width, height: height, viewBox: "0 0 16 16", fill: "none" },
    React__default['default'].createElement(Svg.Path, { d: "M7.97371 8.97934C10.3383 8.97934 12.2561 6.96553 12.2561 4.48278C12.2561 2.00003 10.3382 0 7.97371 0C5.60919 0 3.69128 2.01381 3.69128 4.48278C3.69128 6.95176 5.60917 8.97934 7.97371 8.97934ZM7.97371 1.17242C9.70769 1.17242 11.1264 2.66207 11.1264 4.48278C11.1264 6.3035 9.70769 7.79312 7.97371 7.79312C6.23973 7.79312 4.82099 6.30347 4.82099 4.48275C4.82099 2.66204 6.2397 1.17242 7.97371 1.17242Z", fill: color }),
    React__default['default'].createElement(Svg.Path, { d: "M0.564855 16H15.4351C15.7504 16 16 15.7379 16 15.4069C16 12.3034 13.5961 9.7655 10.6273 9.7655H5.37275C2.41708 9.7655 0 12.2896 0 15.4069C0 15.7379 0.249586 16 0.564855 16ZM5.37275 10.9517H10.6273C12.7816 10.9517 14.555 12.6345 14.8309 14.8138H1.16912C1.44498 12.6483 3.2184 10.9517 5.37275 10.9517Z", fill: color })));

var Icons = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IconProfile: Profile
});

const Icon = (_a) => {
    var { id, accessibility, accessibilityLabel, testID, name = '', touchable = true, type = 'material', size = 20, color = undefined, style = [{}], onPress = () => { }, borderColor = '', backgroundColor = '' } = _a, rest = __rest(_a, ["id", "accessibility", "accessibilityLabel", "testID", "name", "touchable", "type", "size", "color", "style", "onPress", "borderColor", "backgroundColor"]);
    const iconSet = {
        feather: FeatherIcons__default['default'],
        material: MaterialIcons__default['default'],
        fontAwesome: FontAwesomeIcons__default['default'],
        entypo: EntypoIcons__default['default'],
        fontisto: Fontisto__default['default'],
    };
    // eslint-disable-next-line prettier/prettier
    const iconName = (name === null || name === void 0 ? void 0 : name.charAt(0).toUpperCase()) + (name === null || name === void 0 ? void 0 : name.slice(1));
    const Svg = Icons[`Icon${iconName}`];
    const IconComponent = iconSet[type];
    return (React__default['default'].createElement(reactNative.Animated.View, { style: style },
        React__default['default'].createElement(CommonTouchable, Object.assign({ id: id, accessibility: accessibility || iconName, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id, disabled: !touchable, onPress: onPress }, rest),
            React__default['default'].createElement(reactNative.View, null, Svg ? (React__default['default'].createElement(Svg, { width: size, height: size, color: color, borderColor: borderColor, backgroundColor: backgroundColor })) : (React__default['default'].createElement(IconComponent, { name: name, color: color, size: size }))))));
};

const normalTextSize = 16;
const bigTextSize = 24;
const isMultiline = helpers.ifStyle('multiline');
const isCentered$1 = helpers.ifStyle('centered');
const isLarge$1 = helpers.ifStyle('large');
const hasLabel = helpers.ifStyle('label');
const hasError = helpers.ifStyle('error');
const isContrast = helpers.ifStyle('contrast');
const switchStatus = helpers.switchStyle('status');
const primaryContrast = helpers.getTheme('primary.contrast');
const primaryDark = helpers.getTheme('primary.dark');
const success = helpers.getTheme('success');
const failure = helpers.getTheme('failure');
const disabled = helpers.getTheme('disabled');
const inputColor = (props) => switchStatus({
    [exports.InputStatus.Success]: success,
    [exports.InputStatus.Failure]: failure,
    [exports.InputStatus.Default]: isContrast(primaryContrast, primaryDark)(props),
    [exports.InputStatus.Disabled]: disabled,
});
const LABEL_UPPER_STYLE = {
    top: -10,
    fontSize: 14,
};
const LABEL_LOWER_STYLE = {
    top: 20,
    fontSize: 18,
};
const Wrapper = styled__default['default'].View `
  justify-content: ${hasLabel('flex-end', 'flex-start')};
  padding-top: ${reactNativeSizeMatters.moderateScale(8)}px;
  position: relative;
  justify-content: ${hasLabel('flex-end', 'flex-start')};
`;
const InputAreaWrapper = styled__default['default'].View `
  margin-top: 6px;
  margin-bottom: 9px;
  flex-direction: row;
`;
const TextLabel = styled__default['default'].Text `
  line-height: 20px;
  position: absolute;
  color: ${inputColor};
  font-size: ${LABEL_LOWER_STYLE.fontSize}px;
  top: ${LABEL_LOWER_STYLE.top}px;
`;
const Label = reactNative.Animated.createAnimatedComponent(TextLabel);
const TextInput = styled__default['default'].TextInput.attrs((props) => ({
    accessibility: props.accessibilityLabel || props.accessibility,
    testID: props.testID || props.id,
    textAlign: isCentered$1('center', 'left')(props),
    selectionColor: props.contrast
        ? `${primaryContrast(props)}80`
        : `${primaryDark(props)}80`,
    placeholderTextColor: props.contrast
        ? `${primaryContrast(props)}60`
        : `${primaryDark(props)}60`,
})) `
  padding: 0;
  flex-grow: 1;
  border-width: 0;
  min-height: 24px;
  font-weight: 700;
  color: ${isContrast(primaryContrast, primaryDark)};
  margin-top: ${isMultiline('16px', '0px')};
  font-size: ${isLarge$1(bigTextSize, normalTextSize)}px;
`;
const BottomLine = styled__default['default'].View `
  height: 1px;
  background-color: ${inputColor};
`;
const Icon$1 = styled__default['default'](Icon).attrs((props) => ({
    color: hasError(failure(props), isContrast(primaryContrast(props), primaryDark(props))(props))(props),
})) ``;

const Input = TextInput.withComponent(reactNativeMaskedText.TextInputMask);
const TextInput$1 = styled__default['default'](Input) ``;

const MaskedTextInput = (_a) => {
    var { maskType, inputRef, id, accessibility, contrast = false, multiline = false } = _a, props = __rest(_a, ["maskType", "inputRef", "id", "accessibility", "contrast", "multiline"]);
    return (React__default['default'].createElement(TextInput$1, Object.assign({}, props, { id: id, accessibility: accessibility, testID: id, accessibilityLabel: accessibility, ref: inputRef, contrast: contrast, multiline: multiline, type: maskType, underlineColorAndroid: "transparent" })));
};

const AnimatedTextInput = ({ id, accessibility, accessibilityLabel, testID, large = false, contrast = false, centered = false, borderless = false, multiline = false, keyboardType = 'default', iconSize = 20, iconTouchableEnabled = false, status = exports.InputStatus.Default, maskType = null, iconName = '', label = '', value = '', placeholder = '', error = '', style = {}, textStyle = {}, iconHitSlop = {}, inputRef = React__default['default'].createRef(), onBlur = () => { }, onFocus = () => { }, onChangeText = () => { }, onPressIcon = () => { }, }) => {
    const [labelAnimatedStyle] = React.useState({
        top: new reactNative.Animated.Value(LABEL_LOWER_STYLE.top),
        fontSize: new reactNative.Animated.Value(LABEL_LOWER_STYLE.fontSize),
    });
    const [isPlaceholder, setIsPlaceHolder] = React.useState(true);
    const animateComponent = React.useCallback((updatedLabelStyle) => {
        const animations = Object.keys(updatedLabelStyle).map((animationProp) => reactNative.Animated.timing(labelAnimatedStyle[animationProp], {
            toValue: updatedLabelStyle[animationProp],
            duration: 200,
            useNativeDriver: false,
        }));
        reactNative.Animated.parallel(animations).start();
    }, [labelAnimatedStyle]);
    const animationUp = () => {
        animateComponent(LABEL_UPPER_STYLE);
    };
    const animationDown = () => {
        animateComponent(LABEL_LOWER_STYLE);
    };
    const handleOnFocus = (event) => {
        if (isPlaceholder) {
            setIsPlaceHolder(false);
            animationUp();
        }
        onFocus(event);
    };
    const handleOnBlur = (event) => {
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
    const renderTextInput = (inputStatus) => {
        const renderPlaceholder = !value && !isPlaceholder ? placeholder : '';
        const textInputProps = {
            id,
            accessibility,
            accessibilityLabel,
            testID,
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
        return maskType ? (React__default['default'].createElement(MaskedTextInput, Object.assign({ inputRef: inputRef, maskType: maskType, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id }, textInputProps))) : (React__default['default'].createElement(TextInput, Object.assign({ ref: inputRef, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id }, textInputProps)));
    };
    const previousValue = usePrevious(value || '');
    React.useEffect(() => {
        // eslint-disable-next-line prettier/prettier
        const wasEmpty = (previousValue === null || previousValue === void 0 ? void 0 : previousValue.length) === 0;
        if (value && value.length && wasEmpty) {
            animationUp();
        }
        if (label === '') {
            setIsPlaceHolder(false);
        }
    }, [value, previousValue]);
    const hasError = !lodash.isEmpty(error);
    const icon = iconName;
    const renderStatus = hasError ? exports.InputStatus.Failure : status;
    return (React__default['default'].createElement(Wrapper, { style: style, multiline: multiline },
        React__default['default'].createElement(FormError, { id: id, accessibility: accessibility, centered: centered, error: error, large: large },
            !centered && (React__default['default'].createElement(Label, { status: status, contrast: contrast, style: labelAnimatedStyle, isPlaceholder: isPlaceholder, testID: `error_${id}`, accessibilityLabel: `Erro ${accessibility}` }, label)),
            React__default['default'].createElement(InputAreaWrapper, { multiline: multiline },
                renderTextInput(renderStatus),
                !lodash.isEmpty(icon) && (React__default['default'].createElement(Icon$1, { id: `id_${icon}`, accessibility: `icon_${accessibility}`, size: iconSize, name: icon || '', contrast: contrast, error: hasError, touchable: iconTouchableEnabled, onPress: onPressIcon, hitSlop: iconHitSlop }))),
            !borderless && React__default['default'].createElement(BottomLine, { status: status, contrast: contrast }))));
};

const PasswordInput = (props) => {
    const [hidePassword, setHidePassword] = React.useState(true);
    const hitSlop = {
        left: 40,
        right: 40,
        top: 40,
        bottom: 40,
    };
    const onPressShowPassword = React.useCallback(() => {
        setHidePassword(!hidePassword);
    }, [hidePassword]);
    return (React__default['default'].createElement(AnimatedTextInput, Object.assign({ secureTextEntry: hidePassword, iconName: hidePassword ? 'eye' : 'eye-off', iconTouchableEnabled: true, onPressIcon: onPressShowPassword, iconHitSlop: hitSlop }, props)));
};

var v = "4.6.0";
var fr = 29.9700012207031;
var ip = 0;
var op = 49.0000019958109;
var w = 200;
var h = 200;
var nm = "loading_ring_medium";
var ddd = 0;
var assets = [
];
var layers = [
	{
		ddd: 0,
		ind: 1,
		ty: 4,
		nm: "green ring 1",
		ks: {
			o: {
				a: 0,
				k: 100
			},
			r: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.833
							],
							y: [
								0.833
							]
						},
						o: {
							x: [
								0.167
							],
							y: [
								0.167
							]
						},
						n: [
							"0p833_0p833_0p167_0p167"
						],
						t: 0,
						s: [
							0
						],
						e: [
							360
						]
					},
					{
						t: 49.0000019958109
					}
				]
			},
			p: {
				a: 0,
				k: [
					100,
					100,
					0
				]
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			s: {
				a: 0,
				k: [
					200,
					200,
					100
				]
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: {
							a: 0,
							k: [
								54,
								54
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse"
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0.949,
								0.6,
								0.29,
								1
							]
						},
						o: {
							a: 0,
							k: 100
						},
						w: {
							a: 0,
							k: 6
						},
						lc: 2,
						lj: 1,
						ml: 4,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke"
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Ellipse 1",
				np: 3,
				mn: "ADBE Vector Group"
			},
			{
				ty: "tm",
				s: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.644
								],
								y: [
									0
								]
							},
							n: [
								"0p667_1_0p644_0"
							],
							t: 10,
							s: [
								0
							],
							e: [
								100
							]
						},
						{
							t: 50.0000020365418
						}
					],
					ix: 1
				},
				e: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							n: [
								"0p667_1_0p333_0"
							],
							t: -1,
							s: [
								0
							],
							e: [
								100
							]
						},
						{
							t: 37.0000015070409
						}
					],
					ix: 2
				},
				o: {
					a: 0,
					k: 0,
					ix: 3
				},
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim"
			}
		],
		ip: 0,
		op: 50.0000020365418,
		st: -1.00000004073083,
		bm: 0,
		sr: 1
	},
	{
		ddd: 0,
		ind: 2,
		ty: 4,
		nm: "flamingo ring 3",
		parent: 1,
		ks: {
			o: {
				a: 0,
				k: 100
			},
			r: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.785
							],
							y: [
								1
							]
						},
						o: {
							x: [
								1
							],
							y: [
								0
							]
						},
						n: [
							"0p785_1_1_0"
						],
						t: 17,
						s: [
							14.2
						],
						e: [
							360
						]
					},
					{
						t: 50.0000020365418
					}
				]
			},
			p: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				]
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: {
							a: 0,
							k: [
								54,
								54
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse"
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0.435,
								0.812,
								0.592,
								1
							]
						},
						o: {
							a: 0,
							k: 100
						},
						w: {
							a: 0,
							k: 6
						},
						lc: 2,
						lj: 1,
						ml: 4,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke"
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Ellipse 1",
				np: 3,
				mn: "ADBE Vector Group"
			},
			{
				ty: "tm",
				s: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.833
								],
								y: [
									0.833
								]
							},
							o: {
								x: [
									0.167
								],
								y: [
									0.167
								]
							},
							n: [
								"0p833_0p833_0p167_0p167"
							],
							t: 42,
							s: [
								0
							],
							e: [
								1
							]
						},
						{
							t: 44.0000017921567
						}
					],
					ix: 1
				},
				e: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.833
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							n: [
								"0p833_1_0p333_0"
							],
							t: 20,
							s: [
								0
							],
							e: [
								1
							]
						},
						{
							t: 44.0000017921567
						}
					],
					ix: 2
				},
				o: {
					a: 0,
					k: 0,
					ix: 3
				},
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim"
			}
		],
		ip: 17.0000006924242,
		op: 44.0000017921567,
		st: -1.00000004073083,
		bm: 0,
		sr: 1
	},
	{
		ddd: 0,
		ind: 3,
		ty: 4,
		nm: "flamingo ring 2",
		parent: 1,
		ks: {
			o: {
				a: 0,
				k: 100
			},
			r: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.612
							],
							y: [
								1
							]
						},
						o: {
							x: [
								1
							],
							y: [
								0
							]
						},
						n: [
							"0p612_1_1_0"
						],
						t: 17,
						s: [
							14.2
						],
						e: [
							360
						]
					},
					{
						t: 50.0000020365418
					}
				]
			},
			p: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				]
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: {
							a: 0,
							k: [
								54,
								54
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse"
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0.435,
								0.812,
								0.592,
								1
							]
						},
						o: {
							a: 0,
							k: 100
						},
						w: {
							a: 0,
							k: 6
						},
						lc: 2,
						lj: 1,
						ml: 4,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke"
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Ellipse 1",
				np: 3,
				mn: "ADBE Vector Group"
			},
			{
				ty: "tm",
				s: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.833
								],
								y: [
									0.833
								]
							},
							o: {
								x: [
									0.167
								],
								y: [
									0.167
								]
							},
							n: [
								"0p833_0p833_0p167_0p167"
							],
							t: 42,
							s: [
								0
							],
							e: [
								13.7
							]
						},
						{
							t: 44.0000017921567
						}
					],
					ix: 1
				},
				e: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.833
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							n: [
								"0p833_1_0p333_0"
							],
							t: 20,
							s: [
								0
							],
							e: [
								13.7
							]
						},
						{
							t: 44.0000017921567
						}
					],
					ix: 2
				},
				o: {
					a: 0,
					k: 0,
					ix: 3
				},
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim"
			}
		],
		ip: 17.0000006924242,
		op: 44.0000017921567,
		st: -1.00000004073083,
		bm: 0,
		sr: 1
	},
	{
		ddd: 0,
		ind: 4,
		ty: 4,
		nm: "flaming ring 1",
		parent: 1,
		ks: {
			o: {
				a: 0,
				k: 100
			},
			r: {
				a: 0,
				k: 0
			},
			p: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				]
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: {
							a: 0,
							k: [
								54,
								54
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse"
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0.435,
								0.812,
								0.592,
								1
							]
						},
						o: {
							a: 0,
							k: 100
						},
						w: {
							a: 0,
							k: 6
						},
						lc: 2,
						lj: 1,
						ml: 4,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke"
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Ellipse 1",
				np: 3,
				mn: "ADBE Vector Group"
			},
			{
				ty: "tm",
				s: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									1
								],
								y: [
									0
								]
							},
							n: [
								"0p667_1_1_0"
							],
							t: 8,
							s: [
								0
							],
							e: [
								100
							]
						},
						{
							t: 48.0000019550801
						}
					],
					ix: 1
				},
				e: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									1
								],
								y: [
									0
								]
							},
							n: [
								"0p667_1_1_0"
							],
							t: -1,
							s: [
								0
							],
							e: [
								100
							]
						},
						{
							t: 37.0000015070409
						}
					],
					ix: 2
				},
				o: {
					a: 0,
					k: 0,
					ix: 3
				},
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim"
			}
		],
		ip: 15.0000006109625,
		op: 44.0000017921567,
		st: -1.00000004073083,
		bm: 0,
		sr: 1
	}
];
var LoadingAnimation = {
	v: v,
	fr: fr,
	ip: ip,
	op: op,
	w: w,
	h: h,
	nm: nm,
	ddd: ddd,
	assets: assets,
	layers: layers
};

const circularLoading = helpers.getTheme('circularLoading');
const buttonLoading = helpers.getTheme('buttonLoading');
const linearLoading = helpers.getTheme('linearLoading');
const loadingVariant = (props) => {
    switch (props.variant) {
        case 'button':
            return buttonLoading(props) || LoadingAnimation;
        case 'circular':
            return circularLoading(props) || LoadingAnimation;
        case 'linear':
            return linearLoading(props) || LoadingAnimation;
        default:
            return circularLoading(props) || LoadingAnimation;
    }
};
const smallSize = {
    width: reactNativeSizeMatters.moderateScale(60),
    height: reactNativeSizeMatters.moderateScale(60),
};
const largeSize = {
    width: reactNativeSizeMatters.moderateScale(120),
    height: reactNativeSizeMatters.moderateScale(120),
};
const Indicator = styled__default['default'](Animation__default['default']).attrs((props) => ({
    source: loadingVariant(props),
    autoPlay: true,
    loop: true,
})) ``;

const Loading = (_a) => {
    var { large = false, variant = 'circular' } = _a, rest = __rest(_a, ["large", "variant"]);
    return (React__default['default'].createElement(Indicator, Object.assign({ testID: "loading", accessibilitylabel: "Aguarde", variant: variant, style: large ? largeSize : smallSize }, rest)));
};

const disabled$1 = helpers.getTheme('disabled');
const primaryMain = helpers.getTheme('primary.main');
const primaryContrast$1 = helpers.getTheme('primary.contrast');
const secondaryMain = helpers.getTheme('secondary.main');
const secondaryContrast = helpers.getTheme('secondary.contrast');
const tertiaryMain = helpers.getTheme('tertiary.main');
const tertiaryContrast = helpers.getTheme('tertiary.contrast');
const accentMain = helpers.getTheme('accent.main');
const accentContrast = helpers.getTheme('accent.contrast');
const buttonSize = reactNativeSizeMatters.moderateScale(48);
const getBackgroundColor = (props) => {
    if (props.disabled) {
        return disabled$1(props);
    }
    switch (props.variant) {
        case 'primary':
            return primaryMain(props);
        case 'secondary':
            return secondaryMain(props);
        case 'tertiary':
            return tertiaryMain(props);
        case 'accent':
            return accentMain(props);
        case 'flat':
            return 'transparent';
        default:
            return primaryMain(props);
    }
};
const getTextColor = (props) => {
    switch (props.variant) {
        case 'primary':
            return primaryContrast$1(props);
        case 'secondary':
            return secondaryContrast(props);
        case 'tertiary':
            return tertiaryContrast(props);
        case 'accent':
            return accentContrast(props);
        case 'flat':
            return primaryContrast$1(props);
        default:
            return primaryContrast$1(props);
    }
};
const Touchable = styled__default['default'](CommonTouchable) `
  border-radius: ${(props) => (props.rounded ? '50px' : '0')};
`;
const ButtonWrapper = styled__default['default'].View `
  height: ${buttonSize}px;
  flex-direction: row;
  align-items: center;
  margin-vertical: ${reactNativeSizeMatters.moderateScale(6)}px;
  min-width: ${reactNativeSizeMatters.moderateScale(180)}px;
  padding: ${(props) => (props.rounded ? '0' : '10px 11px')};
  border-radius: ${(props) => (props.rounded ? '50px' : '8px')};
  justify-content: center;
  background-color: ${getBackgroundColor};
  border-color: ${getTextColor};
`;
const TextButton = styled__default['default'].Text `
  font-size: ${reactNativeSizeMatters.moderateScale(16)}px;
  letter-spacing: 0.4px;
  color: ${getTextColor};
  font-weight: 500;
`;
const Loading$1 = styled__default['default'](Loading).attrs({
    variant: 'button',
}) `
  align-self: center;
  width: ${reactNativeSizeMatters.moderateScale(55)}px;
`;

const Button = ({ id, children, onPress, accessibility, accessibilityLabel, testID, style = [{}], textStyle = {}, disabled = false, rounded = false, loading = false, variant = 'primary', }) => {
    return (React__default['default'].createElement(Touchable, { id: id, accessibility: accessibility, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id, disabled: loading || disabled, onPress: onPress, rounded: rounded },
        React__default['default'].createElement(ButtonWrapper, { variant: variant, style: style, disabled: disabled, rounded: rounded },
            loading && React__default['default'].createElement(Loading$1, null),
            !loading && (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(TextButton, { variant: variant, style: textStyle, disabled: disabled }, children))))));
};

const If = ({ condition, children }) => condition ? children : null;

const primary = '#C6B09E';
const secondary = '#805281';
const tertiary = '#2A2E39';
const accent = '#547E6A';
const colors = {
    disabled: '#EBEBE4',
    info: '#4096D1',
    success: '#357a38',
    warning: '#F5B800',
    failure: '#cc0000',
    primary: {
        light: polished.lighten(0.05, primary),
        main: primary,
        dark: polished.darken(0.12, primary),
        contrast: '#ffffff',
    },
    secondary: {
        light: polished.lighten(0.05, secondary),
        main: secondary,
        dark: polished.darken(0.1, secondary),
        contrast: '#ffffff',
    },
    tertiary: {
        light: polished.lighten(0.15, tertiary),
        main: tertiary,
        dark: polished.darken(0.1, tertiary),
        contrast: '#ffffff',
    },
    accent: {
        light: polished.lighten(0.05, accent),
        main: accent,
        dark: polished.darken(0.05, accent),
        contrast: '#ffffff',
    },
};

const { width: screenWidth, height: screenHeight } = reactNative.Dimensions.get('window');
({
    headerSpacing: `${reactNativeSizeMatters.verticalScale(20)}px`,
    sceneSpacing: `${reactNativeSizeMatters.moderateScale(32)}px`,
    smallSpacing: `${reactNativeSizeMatters.moderateScale(8)}px`,
    mediumSpacing: `${reactNativeSizeMatters.moderateScale(12)}px`,
    largeSpacing: `${reactNativeSizeMatters.moderateScale(20)}px`,
    giantSpacing: `${reactNativeSizeMatters.moderateScale(26)}px`,
    sectionSpacing: `${reactNativeSizeMatters.moderateScale(38)}px`,
    statusHeight: `${reactNativeSizeMatters.moderateScale(44)}px`,
    screenWidth,
    screenHeight,
});

({
    smallRadius: `${reactNativeSizeMatters.moderateScale(3)}px`,
    mediumRadius: `${reactNativeSizeMatters.moderateScale(8)}px`,
    largeRadius: `${reactNativeSizeMatters.moderateScale(15)}px`,
    modalRadius: `${reactNativeSizeMatters.moderateScale(20)}px`,
    buttonRadius: `${reactNativeSizeMatters.moderateScale(38)}px`,
});

const Wrapper$1 = styled__default['default'].View ``;
const defaultLabelStyle = {
    fontSize: 16,
    color: colors.primary.contrast,
    opacity: 0.7,
};
const containerStyle = {
    marginBottom: 0,
};
const CheckBox = styled__default['default'](DefaultCheckbox__default['default']) ``;

const CheckboxComponent = ({ id, accessibility, label = '', error = '', labelBefore = '', checked = false, onPress = () => { }, labelStyle = defaultLabelStyle, checkBoxColor, checkedCheckBoxColor, uncheckedCheckBoxColor, style, }) => (React__default['default'].createElement(FormError, { id: id, accessibility: accessibility, error: error },
    React__default['default'].createElement(Wrapper$1, { style: style },
        React__default['default'].createElement(CheckBox, { testID: `check_${id}`, accessibilityLabel: `Check ${accessibility}`, style: containerStyle, isChecked: checked, rightText: label, rightTextStyle: labelStyle, leftText: labelBefore, onClick: onPress, checkBoxColor: checkBoxColor, checkedCheckBoxColor: checkedCheckBoxColor, uncheckedCheckBoxColor: uncheckedCheckBoxColor }))));

const shadowStyle = {
    shadowColor: '#212121',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.28,
    shadowRadius: 2,
    elevation: 2,
    width: '100%',
};
const Shadow = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (React__default['default'].createElement(reactNative.View, Object.assign({ style: shadowStyle }, rest), children));
};

const getStatusStyle = helpers.switchStyle('status');
const primaryContrast$2 = helpers.getTheme('primary.contrast');
const primaryDark$1 = helpers.getTheme('primary.dark');
const secondaryDark = helpers.getTheme('disabled');
const inputMainColor = (props) => getStatusStyle({
    [exports.InputStatus.Success]: helpers.getTheme('success'),
    [exports.InputStatus.Failure]: helpers.getTheme('failure'),
    [exports.InputStatus.Default]: props.dark ? primaryDark$1 : primaryContrast$2,
    [exports.InputStatus.Disabled]: secondaryDark,
});
const LABEL_UPPER_STYLE$1 = {
    top: 8,
    fontSize: 14,
};
const LABEL_LOWER_STYLE$1 = {
    top: 40,
    fontSize: 18,
};
const TextLabel$1 = styled__default['default'].Text `
  line-height: 19px;
  padding-bottom: 15px;
  color: ${(props) => props.dark ? primaryDark$1(props) : primaryContrast$2(props)};
`;
const Label$1 = reactNative.Animated.createAnimatedComponent(TextLabel$1);
const DatePicker = styled__default['default'](DefaultDatePicker__default['default']) `
  width: 100%;
`;
const BottomLine$1 = styled__default['default'].View `
  height: 1px;
  background-color: ${inputMainColor};
`;
const commonDatePickerStyles = {
    disabled: {
        backgroundColor: 'transparent',
    },
    dateInput: {
        borderWidth: 0,
    },
    dateTouchBody: {
        width: '100%',
    },
};
const DatePickerStyles = Object.assign(Object.assign({}, commonDatePickerStyles), { placeholderText: {
        position: 'absolute',
        left: 0,
        color: '#fff',
        fontSize: LABEL_LOWER_STYLE$1.fontSize,
    }, dateText: {
        position: 'absolute',
        left: 0,
        color: '#fff',
        fontSize: LABEL_UPPER_STYLE$1.fontSize,
        fontWeight: '700',
    } });
const DatePickerStylesDark = Object.assign(Object.assign({}, commonDatePickerStyles), { placeholderText: {
        position: 'absolute',
        left: 0,
        color: '#000',
        fontSize: LABEL_LOWER_STYLE$1.fontSize,
    }, dateText: {
        position: 'absolute',
        left: 0,
        color: '#000',
        fontSize: LABEL_UPPER_STYLE$1.fontSize,
        fontWeight: '700',
    } });

const DatePickerInput = ({ id, accessibility, label = '', error = '', dark = false, editable = true, value = '', testID = '', mode = 'date', androidMode = 'spinner', locale = 'pt-BR', format = 'DD/MM/YYYY', cancelBtnText = 'Cancelar', confirmBtnText = 'Confirmar', onDateChange = () => { }, maxDate, }) => {
    const [labelAnimatedStyle] = React.useState({
        top: new reactNative.Animated.Value(LABEL_LOWER_STYLE$1.top),
        fontSize: new reactNative.Animated.Value(LABEL_LOWER_STYLE$1.fontSize),
    });
    const [date, setDate] = React.useState('');
    const [isPlaceholder, setIsPlaceHolder] = React.useState(true);
    const execAnimation = React.useCallback(() => {
        const animations = Object.keys(LABEL_UPPER_STYLE$1).map((animationProp) => reactNative.Animated.timing(labelAnimatedStyle[animationProp], {
            toValue: LABEL_UPPER_STYLE$1[animationProp],
            duration: 200,
            useNativeDriver: false,
        }));
        setIsPlaceHolder(false);
        reactNative.Animated.parallel(animations).start();
    }, [reactNative.Animated, labelAnimatedStyle]);
    const updateDate = React.useCallback((updatedDate) => {
        setDate(updatedDate);
        execAnimation();
        if (onDateChange) {
            onDateChange(updatedDate);
        }
    }, [onDateChange]);
    React.useEffect(() => {
        if (value) {
            execAnimation();
        }
    }, [value]);
    const customStyles = error
        ? Object.assign(Object.assign({}, DatePickerStyles), { dateInput: { borderColor: '#cc0000' } }) : dark
        ? DatePickerStylesDark
        : DatePickerStyles;
    return (React__default['default'].createElement(FormError, { id: id, accessibility: accessibility, error: error },
        React__default['default'].createElement(Label$1, { error: error || '', style: labelAnimatedStyle, isPlaceholder: isPlaceholder, dark: dark }, label),
        React__default['default'].createElement(DatePicker, { mode: mode, androidMode: androidMode, locale: locale, placeholder: " ", format: format, editable: !editable, date: date, customStyles: customStyles, maxDate: maxDate, testID: testID, confirmBtnText: confirmBtnText, cancelBtnText: cancelBtnText, onDateChange: updateDate, showIcon: false, dark: dark }),
        React__default['default'].createElement(BottomLine$1, { dark: dark })));
};

const accentMain$1 = helpers.getTheme('accent.main');
const accentContrast$1 = helpers.getTheme('accent.contrast');
const showBorder = helpers.ifStyle('showBorder');
const hasBorderWidth = helpers.ifStyle('borderWidth');
const hasBorderColor = helpers.ifStyle('borderColor');
const Wrapper$2 = styled__default['default'](CommonTouchable) `
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  overflow: hidden;
  border-width: ${(props) => showBorder(hasBorderWidth(props.borderWidth, '2'), '0')}px;
  border-color: ${(props) => hasBorderColor(props.borderColor, accentMain$1)};
  position: relative;
`;
const UploadIconWrapper = styled__default['default'].View `
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size / 4}px;
  height: ${(props) => props.size / 4}px;
  border-radius: ${(props) => props.size / 8}px;
  position: absolute;
  z-index: 2;
  background-color: ${accentMain$1};
`;
const UploadIcon = styled__default['default'](Icon).attrs({ name: 'camera' }) `
  color: ${accentContrast$1};
`;
const CameraView = styled__default['default'](reactNativeCamera.RNCamera) `
  width: ${(props) => props.size}px;
  height: 100%;
  border-radius: ${(props) => props.size / 2}px;
  overflow: hidden;
  border: ${showBorder('4px solid white', '')};
`;

const defaultAvatar = 'https://static1.joj.sk/html/assets/avatar-placeholder.jpg';
const Avatar = React__default['default'].forwardRef((_a, ref) => {
    var { id, image = defaultAvatar, accessibility = 'Upload de Avatar', accessibilityLabel, testID, size = 50, onPress, onUpload, showBorder = true, displayCamera = false } = _a, rest = __rest(_a, ["id", "image", "accessibility", "accessibilityLabel", "testID", "size", "onPress", "onUpload", "showBorder", "displayCamera"]);
    const [uploadedImage, setUploadedImage] = React.useState();
    const cameraRef = React.useRef();
    const openPicker = () => {
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
            ImagePicker__default['default'].launchImageLibrary(options, (response) => {
                setUploadedImage(response.uri);
                if (onUpload) {
                    onUpload(response.uri);
                }
                resolve();
            });
        });
    };
    const takePicture = () => __awaiter(void 0, void 0, void 0, function* () {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true };
            const data = yield cameraRef.current.takePictureAsync(options);
            setUploadedImage(data);
            return data;
        }
    });
    const getUploadImage = () => {
        return uploadedImage;
    };
    const clearUploadImage = () => {
        setUploadedImage('');
    };
    const getCurrentAvatar = () => {
        if (uploadedImage) {
            return { uri: uploadedImage };
        }
        if (image && !lodash.isEmpty(image)) {
            return { uri: image };
        }
        return defaultAvatar;
    };
    React.useImperativeHandle(ref, () => ({
        getUploadImage,
        clearUploadImage,
        takePicture,
        openPicker,
    }));
    return (React__default['default'].createElement(Wrapper$2, Object.assign({ id: id, accessibility: accessibility, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id, size: size, onPress: onPress, disabled: !onPress, showBorder: showBorder }, rest),
        displayCamera && !uploadedImage ? (React__default['default'].createElement(CameraView, { ref: cameraRef, size: size, type: reactNativeCamera.RNCamera.Constants.Type.front, flashMode: reactNativeCamera.RNCamera.Constants.FlashMode.auto, androidCameraPermissionOptions: {
                title: 'Câmera',
                message: 'Precisamos da sua permissão para usar a câmera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancelar',
            } })) : (React__default['default'].createElement(FastImage__default['default'], { source: getCurrentAvatar(), resizeMode: FastImage__default['default'].resizeMode.cover, style: { width: '100%', height: '100%' } })),
        React__default['default'].createElement(UploadIconWrapper, { size: size },
            React__default['default'].createElement(UploadIcon, { id: "", accessibility: "" }))));
});
Avatar.displayName = 'AvatarComponent';

const primaryContrast$3 = helpers.getTheme('primary.contrast');
const Text$1 = styled__default['default'](Typography) `
  font-weight: 500;
  color: ${primaryContrast$3};
  text-decoration-color: ${primaryContrast$3};
  text-decoration-line: underline;
`;

const Link = (_a) => {
    var { id, onPress, children, accessibility, accessibilityLabel, testID, variant = 'body', style } = _a, rest = __rest(_a, ["id", "onPress", "children", "accessibility", "accessibilityLabel", "testID", "variant", "style"]);
    return (React__default['default'].createElement(CommonTouchable, Object.assign({ id: id, onPress: onPress, accessibility: accessibility, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id }, rest),
        React__default['default'].createElement(Text$1, { testID: `text_${id}`, accessibilityLabel: `Texto ${accessibility}`, style: style, variant: variant }, children)));
};

const Icon$2 = styled__default['default'](Icon).attrs({
    touchable: false,
    size: reactNativeSizeMatters.moderateScale(24),
}) ``;

const AccordionContainer = ({ StyledTitle = reactNative.Text, StyledBody = reactNative.Text, StyledHeader = reactNative.View, StyledContent = reactNative.View, data, hasIcon = false, iconUpName = 'chevron-up', iconDownName = 'chevron-down', activeIconColor, inactiveIconColor, isMarkdown = false, onChange, }) => {
    const [activeSections, setActiveSections] = React.useState([]);
    const isActive = (section) => {
        const element = (item) => item.title === section.title;
        const index = data.findIndex(element);
        return index.toString() === activeSections.join('');
    };
    const getIconName = (section) => isActive(section) ? iconUpName : iconDownName;
    const renderHeader = (section) => {
        return (React__default['default'].createElement(StyledHeader, { isActive: isActive(section) },
            React__default['default'].createElement(StyledTitle, { isActive: isActive(section) }, section.title),
            React__default['default'].createElement(If, { condition: hasIcon },
                React__default['default'].createElement(Icon$2, { name: getIconName(section), color: isActive(section) ? activeIconColor : inactiveIconColor, id: iconUpName, accessibility: isActive(section) ? 'Fechar' : 'Abrir' }))));
    };
    const renderContent = (section) => {
        return (React__default['default'].createElement(StyledContent, null,
            React__default['default'].createElement(If, { condition: isMarkdown },
                React__default['default'].createElement(Markdown__default['default'], null, section.content)),
            React__default['default'].createElement(If, { condition: !isMarkdown },
                React__default['default'].createElement(StyledBody, null, section.content))));
    };
    const handleChange = (activeSectionsArray) => {
        const index = lodash.head(activeSectionsArray) || 0;
        if (onChange)
            onChange(data[index].title);
        setActiveSections(activeSectionsArray);
    };
    return (React__default['default'].createElement(Accordion__default['default'], { sections: data, activeSections: activeSections, renderHeader: renderHeader, renderContent: renderContent, onChange: handleChange }));
};

exports.Accordion = AccordionContainer;
exports.Avatar = Avatar;
exports.Button = Button;
exports.CheckBox = CheckboxComponent;
exports.DatePicker = DatePickerInput;
exports.FormError = FormError;
exports.Icon = Icon;
exports.If = If;
exports.Link = Link;
exports.LoadingIndicator = Loading;
exports.PasswordInput = PasswordInput;
exports.Shadow = Shadow;
exports.TextInput = AnimatedTextInput;
exports.Touchable = CommonTouchable;
exports.Typography = Typography;
//# sourceMappingURL=index.js.map
