import React from 'react';

import LibraryBooksList from './LibraryBooksList';



export default {
  title: 'Organisms/LibraryBooksList',
  component: LibraryBooksList,
};

const LibraryBooksListTemp = (args) => <LibraryBooksList {...args} />;
export const LibraryBooksListView = LibraryBooksListTemp.bind({});
LibraryBooksListView.args = {};


