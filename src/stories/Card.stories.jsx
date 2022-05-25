import React from 'react';

import Card from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
  // includeStories: ['SimpleStory', 'ComplexStory'], // Storybook loads these stories
  // excludeStories: /.*Data$/, // Storybook ignores anything that contains Data
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};

const text =
  'Nulla id ipsum in nisl pellentesque commodo sit amet sit amet est. Fusce suscipit ullamcorper sollicitudin. Etiam cursus ullamcorper sapien, vel volutpat velit. Praesent vulputate mauris at lorem varius ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque orci gravida, blandit ex id, eleifend arcu. Morbi maximus egestas velit.';
const Template = (args) => <Card {...args}>{text}</Card>;

export const WhiteCard = Template.bind({});
WhiteCard.args = {
  bg: 'white',
  width: [150, 300, 300, 600],
};

export const BlackCard = Template.bind({});
BlackCard.args = {
  bg: '#000',
  width: [150, 300, 300, 600],
  color: '#fff',
  borderColor: 'white',
  borderWidth: '2px',
};
