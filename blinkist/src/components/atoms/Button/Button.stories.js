import React from 'react';

import  Button  from './Button';

export default {
  title: 'Atom/Button',
  component: Button,
};

const ButtonTemplate = (args) => <Button {...args} />;

export const ButtonView = ButtonTemplate.bind({});
ButtonView.args = {
  text: "Button",
};

export const ButtonView1 = ButtonTemplate.bind({});
ButtonView1.args = {
  text: "Button",
};