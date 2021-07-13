import React from 'react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const HeaderContent = Template.bind({});
HeaderContent.args = {
  ...HeaderStories.HeaderContent.args,
};

export const FooterContent = Template.bind({});
FooterContent.args = {
  ...HeaderStories.FooterContent.args,
};
