// Button.stories.js

import { Button, ButtonType } from './Button';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
      onClick: {action: 'clicked' },
  }
} as Meta


const Template: Story<ButtonType> = (args) => <Button {...args}> Button</Button>;

export const ButtonComponentStory = Template.bind({});
ButtonComponentStory.args = {
    type: 'button',
    variant: 'filled',
    color: 'primary'
}
