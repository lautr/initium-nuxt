import type { Meta, StoryObj } from '@storybook/vue3-vite'
import LayoutSplash from '~/components/layout/Splash.vue'
import UiSheet from '~/components/ui/Sheet.vue'

const meta = {
  title: 'Layout/Splash',
  component: LayoutSplash,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A full screen layout with a centered element, e.g. login.',
      },
    },
  },
} satisfies Meta<typeof LayoutSplash>

export default meta
type Story = StoryObj<typeof meta>

export const Content: Story = {
  render: args => ({
    components: { LayoutSplash, UiSheet },
    setup() {
      return { args }
    },
    template: `
      <LayoutSplash v-bind="args">
        <UiSheet>{{ args.default || "Splash Content" }}</UiSheet>
      </LayoutSplash>
    `,
  }),
  args: {
    default: 'Splash Content',
  },
}

export const Default: Story = {
  render: args => ({
    components: { LayoutSplash },
    setup() {
      return { args }
    },
    template: `
      <LayoutSplash v-bind="args" />
    `,
  }),
}
