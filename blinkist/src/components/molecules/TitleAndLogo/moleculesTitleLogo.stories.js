import React from 'react';
import  BlinkistTitleLogo  from '../../molecules/TitleAndLogo/BlinkistTitleLogo';


export default {
  title: 'Molecules/BlinkistTitleLogo',
  component: BlinkistTitleLogo,
};

const BlinkistTitleLogoTemp = (args) => <BlinkistTitleLogo {...args} />;

export const BlinkistTitleLogoView = BlinkistTitleLogoTemp.bind({});
BlinkistTitleLogoView.args = {};
