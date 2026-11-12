import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';
import avatarImg from './../../stories/assets/youtube.svg'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: avatarImg,
    alt: 'User avatar',
    size: 'md',
  },
};

export const WithFallback: Story = {
  args: {
    src: 'broken-url',
    fallback: 'https://i.pravatar.cc/120',
    alt: 'Fallback avatar',
    size: 'lg',
  },
};