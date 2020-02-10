import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components'
import { DismissKeyboardView, If } from '~/components';
import { ChildrenWrapper, Title, Subtitle } from './styles';
import { ThemeContext } from '../ThemeContext';

const contentContainerStyle = {
  width: '100%',
  flexDirection: 'column',
  alignContent: 'center',
  alignSelf: 'center',
  paddingBottom: 40,
};

interface SceneStyle {
  [index: number]: {
    backgroundColor?: string;
  };
}
interface Props {
  title?: string;
  subtitle?: string;
  style?: SceneStyle;
  scrollStyle?: object;
  scrollRef?: any;
  fullWidth?: boolean;
}

const SceneWrapper: React.FC<Props> = ({
  children,
  title = '',
  subtitle = '',
  style = [{}],
  scrollStyle = {},
  scrollRef = React.createRef(),
  fullWidth = false,
  ...rest
}) => {
  const { theme } = useContext(ThemeContext);
  // eslint-disable-next-line prettier/prettier
  const backgroundColor = style[0]?.backgroundColor;
  return (
    <ThemeProvider theme={theme}>
      <DismissKeyboardView>
        <ChildrenWrapper
          fullWidth={fullWidth}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          contentContainerStyle={[contentContainerStyle, style]}
          style={[scrollStyle, { backgroundColor, width: '100%' }]}
          ref={scrollRef}
          {...rest}
        >
          <If condition={!!title}>
            <Title fullWidth={fullWidth}>{title}</Title>
          </If>
          <If condition={!!subtitle}>
            <Subtitle fullWidth={fullWidth}>{subtitle}</Subtitle>
          </If>
          {children}
        </ChildrenWrapper>
      </DismissKeyboardView>
    </ThemeProvider>
  );
};

export default SceneWrapper;
