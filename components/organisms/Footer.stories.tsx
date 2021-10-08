import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Footer from './Footer';

export default {
  title: 'Design System/Organisms/Footer',
  component: Footer,
  argTypes: {
    owner: {
      defaultValue: 'depth401',
      type: { name: 'string', required: true },
    },
  },
} as ComponentMeta<typeof Footer>;

export const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
);
