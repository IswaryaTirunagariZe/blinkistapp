import React from 'react';

import MainPage from './MainPage';


export default {
  title: 'Pages/MainPage',
  component: MainPage,
};

const MainPageTemp = (args) => <MainPage {...args} />;

export const MainPageView = MainPageTemp.bind({});
MainPageView.args = {};
