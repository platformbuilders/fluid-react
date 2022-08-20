export type TouchableType = {
  id?: string;
  accessibility: string;
  accessibilityLabel?: string;
  testID?: string;
  disabled?: boolean;
  onPress?: (param: any) => void;
};
