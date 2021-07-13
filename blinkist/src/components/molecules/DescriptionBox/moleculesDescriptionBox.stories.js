import React from 'react';

import DescriptionBox from './DescriptionBox';


export default {
  title: 'Molecules/DescriptionBox',
  component: DescriptionBox,
};


const DescriptionBoxTemp = (args) => <DescriptionBox {...args} />;


export const DescriptionBoxView = DescriptionBoxTemp.bind({});
DescriptionBoxTemp.args = {};

