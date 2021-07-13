import React from 'react';

import CategoryType from './CategoryType';


export default {
  title: 'Molecules/CategoryType',
  component: CategoryType,
};

const CategoryTypeTemp = (args) => <CategoryType {...args} />;


export const CategoryTypeView = CategoryTypeTemp.bind({});
CategoryTypeView.args = {
    categoryType:"Category Type"
};
