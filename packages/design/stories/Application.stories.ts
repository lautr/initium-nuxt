import type { Meta, StoryObj } from '@storybook/vue3'
import LayoutApplication from "~/components/layout/Application.vue"
import UiSheet from "~/components/ui/Sheet.vue"

const meta: Meta<typeof LayoutApplication> = {
  title: 'Layout/Application',
  component: LayoutApplication,
  render: args => ({
    components: {
      UiSheet,
      LayoutApplication,
    },
    setup() {
      return { args }
    },
    template: `
      <LayoutApplication v-bind="args">
        {{ args.content }}
      </LayoutApplication>
    `,
  }),
}

type Story = StoryObj<typeof LayoutApplication>

export default meta
export const Application: Story = {
  args: {
    content: 'Application Content',
  },
}

