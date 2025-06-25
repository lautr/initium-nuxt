import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiSheet from '~/components/ui/Sheet.vue'

const meta = {
  title: 'UI/Sheet',
  component: UiSheet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A sheet component, provides a sheet to display content.',
      },
    },
  },
} satisfies Meta<typeof UiSheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => ({
    components: { UiSheet },
    setup() {
      return { args }
    },
    template: `
      <UiSheet v-bind="args">
        {{ args.default || 'Sheet Content' }}
      </UiSheet>
    `,
  }),
  args: {
    default: 'Sheet Content',
  },
}
