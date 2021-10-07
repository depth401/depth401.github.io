import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Title from './Title';

export default {
  title: 'Design System/Atoms/Title',
  component: Title,
  argTypes: {
    title: {
      defaultValue: '啓蒙の坂',
      type: { name: 'string', required: true },
    },
  },
} as ComponentMeta<typeof Title>;

export const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args} />
);
