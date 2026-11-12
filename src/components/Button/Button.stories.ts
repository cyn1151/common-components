import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    size: 'md',
  },
};
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'md',
  },
};
export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'md',
  },
};