import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

// import { Button, ButtonProps } from './Button';
import Button, {ButtonType, BaseButtonProps,ButtonSize} from '../components/Button/button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: { control: 'size' },
  },
} as Meta;

const Template: Story<BaseButtonProps> = (args) =>  <Button {...args}>Large Primary</Button>;

const Template6: Story<BaseButtonProps> = (args) =>  <Button {...args}>Large 9</Button>;

export const Primary8 = Template.bind({});
Primary8.args = {
  btnType: 'primary',
  // label: 'Button',
};

export const Secondary = Template6.bind({});
Secondary.args = {
 size:'sm'
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

