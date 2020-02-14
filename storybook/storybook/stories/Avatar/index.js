import * as React from 'react';
import { Avatar as BuildersAvatar } from 'builders-ui';
import CenteredView from '../utils/CenteredView';

const Avatar = () => {
  return (
    <CenteredView>
      <BuildersAvatar
        image={
          'https://media.licdn.com/dms/image/C560BAQED6xsxb4hwOA/company-logo_200_200/0?e=2159024400&v=beta&t=xJU92Gb_eWF3dalwZEaubtm7ILRa0O101xIO2diPkZQ'
        }
        showBorder
        size={100}
        onPress={() => {}}
        onUpload={() => {}}
      />
    </CenteredView>
  );
};

export default Avatar;
