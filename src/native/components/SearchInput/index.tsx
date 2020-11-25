import React, { useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { Input, Wrapper } from './styles';

type Props = {
  id: string;
  accessibility: string;
  onChange(value: string): void;
  onClear?(): void;
  onFocus?(): void;
  onBlur?(): void;
};

const SearchInput: React.FC<Props> = ({
  id,
  accessibility,
  onChange,
  onClear = () => null,
  onFocus = () => null,
  onBlur = () => null,
}) => {
  const [searchText, setSearchText] = useState('');
  const [isSearching, setSearching] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Wrapper>
      <Input
        inputRef={ref}
        borderless
        large={false}
        id={id}
        accessibility={accessibility}
        autoCapitalize="none"
        autoCorrect={false}
        iconName={isFocused || !!searchText ? 'close' : 'magnify'}
        autoCompleteType="off"
        placeholder={isSearching ? '' : 'Pesquise aqui'}
        onChangeText={(value: string): void => {
          setSearchText(value);
          onChange(value);
        }}
        onPressIcon={(): void => {
          setSearchText('');
          onClear();
          setSearching(false);
          Keyboard.dismiss();
        }}
        value={searchText}
        onFocus={() => {
          setFocused(true);
          onFocus();
        }}
        onBlur={(): void => {
          onBlur();
          setFocused(false);
          if (!searchText) {
            setSearching(false);
          }
        }}
      />
    </Wrapper>
  );
};

export default SearchInput;
