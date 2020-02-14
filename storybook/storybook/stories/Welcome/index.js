import React, { Component } from 'react';
import { Wrapper, Header, Content, Image } from './styles';

export default class Welcome extends Component {
  render() {
    return (
      <Wrapper>
        <Image />
        <Header>Welcome to Builders UI Storybook</Header>
        <Content>
          This is a UI Component Library made from our team at Platform
          Builders!
        </Content>
      </Wrapper>
    );
  }
}
