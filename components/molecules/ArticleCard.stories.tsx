import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import ArticleCard from './ArticleCard';

export default {
  title: 'Design System/Molecules/ArticleCard',
  component: ArticleCard,
  argTypes: {
    href: {
      defaultValue: '/',
    },
    title: {
      defaultValue: 'タイトル',
      type: { name: 'string', required: true },
    },
    overview: {
      defaultValue: '概要',
      type: { name: 'string', required: false },
    },
    tags: {
      defaultValue: [
        'Java',
        'JavaScript',
        'CSS',
        'HTML',
        'GitHub',
        'Haskell',
        'Scala',
        'Terminal',
        'IntelliJ',
        'Rust',
        'TypeScript',
        'Elm',
        'Emacs',
        'Spacemacs',
        'Git',
        'Ubuntu',
        'Unknown',
      ],
      type: { name: 'array', required: true },
    },
    updatedAt: {
      defaultValue: '2020-01-01',
      type: { name: 'string', required: true },
    },
  },
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
);

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
