import React from 'react';

import  Text  from './Text';

export default {
  title: 'Atom/Text',
  component: Text,
};

const TextTemplate = (args) => <Text {...args} />;

export const TextView= TextTemplate.bind({});
TextView.args = {
  variant:"paragraph",        
  text:"Displaying Text as paragraph"
};
