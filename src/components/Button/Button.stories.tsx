import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './button'

export default {
  title: 'Button Component',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  btnType: 'default',
  children: 'Default'
}

export const Primary = Template.bind({});
Primary.args = {
  btnType: 'primary',
  children: 'Primary'
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Large'
}









