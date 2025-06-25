import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiButton from '~/components/ui/Button.vue'

const meta = {
  title: 'UI/Button',
  component: UiButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'button element',
      },
    },
  },
} satisfies Meta<typeof UiButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: `
      <UiButton v-bind="args">
        {{ args.default || 'Button' }}
      </UiButton>
    `,
  }),
  args: {
    default: 'Button',
  },
}
