import React from 'react'
import { Meta, Story } from '@storybook/react'
import { HeaderProps } from 'interfaces/Header'
import Header from 'components/common/Header'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Header',
  component: Header,
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const WithLogo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithLogo.args = {
  showBtnBack: false,
  shadow: true,
}

export const WithBackButton = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithBackButton.args = {
  showBtnBack: true,
  title: 'ガイドの知恵袋',
}
