import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import ArticleCards from './ArticleCards';

export default {
  title: 'Design System/Organisms/ArticeCards',
  component: ArticleCards,
} as ComponentMeta<typeof ArticleCards>;

export const Template: ComponentStory<typeof ArticleCards> = (args) => (
  <ArticleCards {...args} />
);
Template.args = {
  cards: Array.from({ length: 10 }, (v, k) => ({
    title: `タイトル #${k}`,
    href: '',
    overview: 'overview',
    tags: [
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
  })),
};
