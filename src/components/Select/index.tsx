import { FC } from 'react';
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

type Props = {
  id: string;
  options: SelectOptions[];
  disabled?: boolean;
  helperMessage?: string;
  label?: string;
  placeholder?: string;
  onValueChange: (value: string) => void;
  defaultValue?: string;
  value?: string;
};

const Select: FC<Props> = ({
  options,
  disabled = false,
  placeholder,
  onValueChange,
  value,
  defaultValue,
}) => (
  <Wrapper
    onValueChange={onValueChange}
    defaultValue={defaultValue}
    value={value}
  >
    <StyledTrigger aria-label="select" disabled={disabled}>
      <Value placeholder={<PlaceholderText>{placeholder}</PlaceholderText>} />
      <Icon>
        <ChevronDownIcon />
      </Icon>
    </StyledTrigger>
    <StyledContent side="top" position="popper">
      <ScrollUpButton>
        <ChevronUpIcon />
      </ScrollUpButton>
      <StyledViewPort>
        {options.map((item) => (
          <StyledItem value={item.value} key={item.value}>
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
