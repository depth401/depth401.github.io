import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Tag from './Tag';

export default {
  title: 'Design System/Atoms/Tag',
  component: Tag,
  argTypes: {
    href: {
      defaultValue: '/',
    },
    text: {
      defaultValue: 'タグ',
      type: { name: 'string', required: true },
    },
  },
} as ComponentMeta<typeof Tag>;

export const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
