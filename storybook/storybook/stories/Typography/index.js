import React from 'react';
import {
  Typography as BuildersTypography,
  BuildersThemeProvider,
} from 'builders-ui';
import { FontsContainer } from './styles';
import CenteredView from '../utils/CenteredView';
import { ScrollView } from 'react-native';
import { theme } from '../utils/theme';

class Typography extends React.Component {
  render() {
    return (
      <BuildersThemeProvider theme={theme}>
        <ScrollView>
          <CenteredView>
            <FontsContainer>
              <BuildersTypography variant="title1">Title 1</BuildersTypography>
              <BuildersTypography variant="title2">Title 2</BuildersTypography>
              <BuildersTypography variant="title3">Title 3</BuildersTypography>
              <BuildersTypography variant="title4">Title 4</BuildersTypography>
              <BuildersTypography variant="subhead">Subhead</BuildersTypography>
              <BuildersTypography variant="largeTitle">
                LargeTitle
              </BuildersTypography>
              <BuildersTypography variant="headline">
                Headline
              </BuildersTypography>
              <BuildersTypography variant="footnote">
                Foot Note
              </BuildersTypography>
              <BuildersTypography variant="caption1">
                Caption 1
              </BuildersTypography>
              <BuildersTypography variant="caption2">
                Caption 2
              </BuildersTypography>
              <BuildersTypography variant="body">Body Text</BuildersTypography>
            </FontsContainer>
          </CenteredView>
        </ScrollView>
      </BuildersThemeProvider>
    );
  }
}

export default Typography;
