import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
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

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Pc = Template.bind({});

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: 'ipad12p',
  },
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
