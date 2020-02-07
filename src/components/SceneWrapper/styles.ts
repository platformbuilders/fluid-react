import styled from 'styled-components';
import { ScrollView } from 'react-native';
import { Typography } from '~/components';
import { getTheme, ifStyle } from '~/utils/helpers';
import { getBottomSpace, getStatusBarHeight, isIphoneX } from '~/utils/modules';

const extraPadding = isIphoneX() ? 20 : 10;
const statusBarHeight = getStatusBarHeight();
const bottomSpacing = getBottomSpace();
const sceneSpacing = getTheme('sceneSpacing');
const isFullWidth = ifStyle('fullWidth');

interface ChildrenWrapperProps {
  contentContainerStyle: object[];
  fullWidth: boolean;
}

export const ChildrenWrapper = styled(ScrollView)<ChildrenWrapperProps>`
  flex: 1;
  width: 100%;
  padding-horizontal: ${isFullWidth(0, sceneSpacing)};
  padding-top: ${statusBarHeight + extraPadding}px;
  padding-bottom: ${bottomSpacing + extraPadding}px;
`;

interface TitleProps {
  fullWidth: boolean;
}
export const Title = styled(Typography).attrs({ variant: 'largeTitle' })<
  TitleProps
>`
  color: ${getTheme('primary.contrast')};
  margin-horizontal: ${isFullWidth(sceneSpacing, 0)};
  font-weight: 700;
`;

interface SubtitleProps {
  fullWidth: boolean;
}
export const Subtitle = styled(Typography).attrs({ variant: 'body' })<
  SubtitleProps
>`
  color: ${getTheme('primary.contrast')};
  margin-horizontal: ${isFullWidth(sceneSpacing, 0)};
  margin-bottom: ${getTheme('largeSpacing')}px;
  font-weight: 300;
  opacity: 0.8;
  letter-spacing: 0.3px;
`;
