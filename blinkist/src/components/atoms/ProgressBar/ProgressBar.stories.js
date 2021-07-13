import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Atom/ProgressBar',
  component: ProgressBar,
};

const ProgressBarTemplate = (args) => <ProgressBar {...args} />;

export const ProgressBarView = ProgressBarTemplate.bind({});
ProgressBarView.args = {};

