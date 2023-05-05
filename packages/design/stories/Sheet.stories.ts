import type { Meta, StoryObj } from '@storybook/vue3'
import UiSheet from '~/components/ui/Sheet.vue'

const meta: Meta<typeof UiSheet> = {
  title: 'UI/Sheet',
  component: UiSheet,
  render: args => ({
    components: {
      UiSheet,
    },
    setup() {
      return { args }
    },
    template: `
      <UiSheet v-bind="args">{{ args.content }}</UiSheet>
    `,
  }),
}

type Story = StoryObj<typeof UiSheet>

export default meta
export const Sheet: Story = {
  args: {
    content: 'Sheet Text',
  },
}
