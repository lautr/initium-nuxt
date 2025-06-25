import type { Meta, StoryObj } from '@storybook/vue3-vite'
import LayoutApplication from '~/components/layout/Application.vue'

const meta = {
  title: 'Layout/Application',
  component: LayoutApplication,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Application Layout',
      },
    },
  },
} satisfies Meta<typeof LayoutApplication>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => ({
    components: { LayoutApplication },
    setup() {
      return { args }
    },
    template: `
      <LayoutApplication v-bind="args">
        <template #default>{{ args.default || "Application Content" }}</template>
        <template #header>{{ args.header || "Application Header" }}</template>
      </LayoutApplication>
    `,
  }),
  args: {
    default: 'Application Content',
    header: 'Application Header',
  },
}
