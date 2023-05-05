import type { Meta, StoryObj } from '@storybook/vue3'
import UiInput from '~/components/ui/Input.vue'

const meta: Meta<typeof UiInput> = {
  title: 'UI/Input',
  component: UiInput,
}

type Story = StoryObj<typeof UiInput>

export default meta
export const Input: Story = {
  args: {
    placeholder: 'Placeholder text',
  },
}
