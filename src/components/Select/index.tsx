import { FC, SelectHTMLAttributes } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import {
  Icon,
  ScrollDownButton,
  ScrollUpButton,
  Value,
} from '@radix-ui/react-select';
import {
  PlaceholderText,
  StyledContent,
  StyledItem,
  StyledItemText,
  StyledTrigger,
  StyledViewPort,
  Wrapper,
} from './styles';

type SelectOptions = {
  option: string;
  value: string;
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  options: SelectOptions[];
  disabled?: boolean;
  helperMessage?: string;
  label?: string;
  placeholder?: string;
  onValueChange: (value: string) => void;
  defaultValue?: string;
  value?: string;
  style?: any;
  styleItem?: any;
  styleContentItem?: any;
};

const Select: FC<SelectProps> = ({
  options,
  disabled = false,
  placeholder,
  onValueChange,
  value,
  defaultValue,
  id,
  style,
  styleItem,
  styleContentItem,
}) => (
  <Wrapper
    onValueChange={onValueChange}
    defaultValue={defaultValue}
    value={value}
  >
    <StyledTrigger
      id={id}
      aria-label="select"
      disabled={disabled}
      style={style}
    >
      <Value placeholder={<PlaceholderText>{placeholder}</PlaceholderText>} />
      <Icon>
        <ChevronDownIcon />
      </Icon>
    </StyledTrigger>
    <StyledContent side="top" position="popper">
      <ScrollUpButton>
        <ChevronUpIcon />
      </ScrollUpButton>
      <StyledViewPort style={styleContentItem}>
        {options.map((item) => (
          <StyledItem value={item.value} key={item.value} style={styleItem}>
            <StyledItemText>{item.option}</StyledItemText>
          </StyledItem>
        ))}
      </StyledViewPort>
      <ScrollDownButton>
        <ChevronDownIcon />
      </ScrollDownButton>
    </StyledContent>
  </Wrapper>
);

export default Select;
