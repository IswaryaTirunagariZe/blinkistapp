import React from 'react';
import Footer from './Footer';



export default {
  title: 'Organisms/Footer',
  component: Footer,
};

const FooterTemp = (args) => <Footer {...args} />;

export const FooterView = FooterTemp.bind({});
FooterView.args = {};

