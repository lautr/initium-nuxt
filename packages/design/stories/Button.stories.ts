import type { Meta, StoryObj } from '@storybook/vue3'
import UiButton from '~/components/ui/Button.vue'

const meta: Meta<typeof UiButton> = {
  title: 'UI/Button',
  component: UiButton,
  render: args => ({
    components: {
      UiButton,
    },
    setup() {
      return { args }
    },
    template: `
      <UiButton v-bind="args">{{ args.content }}</UiButton>
    `,
  }),
}

type Story = StoryObj<typeof UiButton>

export default meta
export const Button: Story = {
  args: {
    content: 'Button Text',
  },
}
