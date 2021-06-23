import { Meta, Story } from '@storybook/react';
import { Hero, HeroType } from './Hero';
export default {
    title: 'Components/HeroComponent',
    component: Hero,
    argTypes: {
        onSignIn: {action: 'clicked'}
    }
} as Meta;

const Template: Story<HeroType> = (args: HeroType) => <Hero {...args} />

export const HeroComponentStory = Template.bind({});

