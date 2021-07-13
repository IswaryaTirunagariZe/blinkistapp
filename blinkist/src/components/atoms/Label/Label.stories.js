import React from 'react';

import  Label  from './Label';

export default {
  title: 'Atom/Label',
  component: Label,
};

const LabelTemplate = (args) => <Label {...args} />;

export const LabelView = LabelTemplate.bind({});
LabelView.args = {
  variant:"h1",
  label:"Label"
};
