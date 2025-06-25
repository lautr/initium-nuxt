import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiInput from '~/components/ui/Input.vue'

const meta = {
  title: 'UI/Input',
  component: UiInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'input element',
      },
    },
  },
} satisfies Meta<typeof UiInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => ({
    components: { UiInput },
    setup() {
      return { args }
    },
    template: `
      <UiInput v-bind="args" />
    `,
  }),
  args: {
    placeholder: 'Placeholder text',
  },
}
