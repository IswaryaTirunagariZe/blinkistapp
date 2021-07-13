import React from 'react';

import  Image  from './Image';

export default {
  title: 'Atom/Image',
  component: Image,
};


const ImageTemplate = (args) => <Image {...args} />;


export const ImageView = ImageTemplate.bind({});
ImageView.args = {
  src:"https://source.unsplash.com/random",
  alt:"My Image"
};
