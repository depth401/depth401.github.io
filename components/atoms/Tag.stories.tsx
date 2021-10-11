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

export const Java = Template.bind({});
Java.args = {
  text: 'Java',
};

export const JavaScript = Template.bind({});
JavaScript.args = {
  text: 'JavaScript',
};

export const CSS = Template.bind({});
CSS.args = {
  text: 'CSS',
};

export const HTML = Template.bind({});
HTML.args = {
  text: 'HTML',
};

export const GitHub = Template.bind({});
GitHub.args = {
  text: 'GitHub',
};

export const Haskell = Template.bind({});
Haskell.args = {
  text: 'Haskell',
};

export const Scala = Template.bind({});
Scala.args = {
  text: 'Scala',
};

export const Terminal = Template.bind({});
Terminal.args = {
  text: 'Terminal',
};

export const IntelliJ = Template.bind({});
IntelliJ.args = {
  text: 'IntelliJ',
};

export const Rust = Template.bind({});
Rust.args = {
  text: 'Rust',
};

export const TypeScript = Template.bind({});
TypeScript.args = {
  text: 'TypeScript',
};

export const Emacs = Template.bind({});
Emacs.args = {
  text: 'Emacs',
};

export const Elm = Template.bind({});
Elm.args = {
  text: 'Elm',
};

export const Spacemacs = Template.bind({});
Spacemacs.args = {
  text: 'Spacemacs',
};

export const Git = Template.bind({});
Git.args = {
  text: 'Git',
};

export const Ubuntu = Template.bind({});
Ubuntu.args = {
  text: 'Ubuntu',
};
