import type { Meta, StoryObj } from '@storybook/vue3'
import LayoutApplication from '~/components/layout/Application.vue'

const meta: Meta<typeof LayoutApplication> = {
  title: 'Layout/Application',
  component: LayoutApplication,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Application Layout',
      },
    },
    slots: {
      default: {
        template: '{{ args.default || "Application Content" }}',
        description: 'content',
      },
      header: {
        template: '{{ args.header || "Application Header" }}',
        description: 'header',
      },
    },
  },
} satisfies Meta<typeof LayoutApplication>

type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {
  args: {},
}
