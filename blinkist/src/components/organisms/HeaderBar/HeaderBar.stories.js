import React from 'react';

import HeaderBar from './HeaderBar';



export default {
  title: 'Organisms/HeaderBar',
  component: HeaderBar,
};

const HeaderBarTemp = (args) => <HeaderBar {...args} />;
export const HeaderBarView = HeaderBarTemp.bind({});
HeaderBarView.args = {};


