import styled from 'styled-components/native';

export const Image = styled.Image.attrs({
  source: {
    uri:
      'https://media.licdn.com/dms/image/C560BAQED6xsxb4hwOA/company-logo_200_200/0?e=2159024400&v=beta&t=xJU92Gb_eWF3dalwZEaubtm7ILRa0O101xIO2diPkZQ',
  },
})`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border: 1px #f5f5f5;
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: center;
`;

export const Header = styled.Text`
  font-size: 18;
  margin-bottom: 18;
`;

export const Content = styled.Text`
  font-size: 12;
  margin-bottom: 10px;
  line-height: 18;
`;
