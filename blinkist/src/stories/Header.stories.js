import React from 'react';

import  Header  from '../components/organisms/SearchBar/SearchBar'

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const BlinkistTitleLogo = Template.bind({});
BlinkistTitleLogo.args = {
  user: {},
};

export const HeaderContent = Template.bind({});
HeaderContent.args = {};

export const FooterContent = Template.bind({});
FooterContent.args = {};
