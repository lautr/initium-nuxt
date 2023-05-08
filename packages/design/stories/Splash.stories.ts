import type { Meta, StoryObj } from '@storybook/vue3'
import LayoutSplash from "~/components/layout/Splash.vue"
import UiSheet from "~/components/ui/Sheet.vue"

const meta: Meta<typeof LayoutSplash> = {
  title: 'Layout/Splash',
  component: LayoutSplash,
  render: args => ({
    components: {
      UiSheet,
      LayoutSplash,
    },
    setup() {
      return { args }
    },
    template: `
      <LayoutSplash v-bind="args">
        <UiSheet>{{ args.content }}</UiSheet>
      </LayoutSplash>
    `,
  }),
}

type Story = StoryObj<typeof LayoutSplash>

export default meta
export const Splash: Story = {
  args: {
    content: 'Splash Content',
  },
}

