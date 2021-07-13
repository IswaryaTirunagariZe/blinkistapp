import React from 'react';

import MyLibrary from './MyLibrary';


export default {
  title: 'Pages/MyLibrary',
  component: MyLibrary,
};


const MyLibraryTemp = (args) => <MyLibrary {...args} />;


export const MyLibraryView = MyLibraryTemp.bind({});
MyLibraryView.args = {};