import React from 'react';

import  BookCardsList  from './BookCardsList';



export default {
  title: 'Organisms/BookCardsList',
  component: BookCardsList,
};

const BookCardsListTemp = (args) => <BookCardsList {...args} />;


export const BookCardList = BookCardsListTemp.bind({});
BookCardList.args = {};
