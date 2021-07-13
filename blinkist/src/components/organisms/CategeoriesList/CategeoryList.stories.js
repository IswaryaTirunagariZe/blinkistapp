import React from 'react';

import CategeoriesList from './CategeoriesList';



export default {
  title: 'Organisms/CategeoriesList',
  component: CategeoriesList
};

const CatListTemp = (args) => <CategeoriesList {...args} />;


export const CategeoriesListView = CatListTemp.bind({});
CategeoriesListView.args = {};

