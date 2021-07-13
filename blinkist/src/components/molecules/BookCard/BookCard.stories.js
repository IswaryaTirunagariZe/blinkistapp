import React from 'react';

import BookCard from './BookCard';


export default {
  title: 'Molecules/BookCard',
  component: BookCard,
};


const BookCardTemp = (args) => <BookCard {...args} />;
export const BookCardView = BookCardTemp.bind({});
BookCardView.args = {};


