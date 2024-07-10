import type { Meta, StoryObj } from '@storybook/vue3'
import LayoutSplash from '~/components/layout/Splash.vue'
import UiSheet from '~/components/ui/Sheet.vue'

const meta: Meta<typeof LayoutSplash> = {
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
}

type Story = StoryObj<typeof LayoutSplash>

export default meta
export const Content: Story = {
  parameters: {
    slots: {
      default: {
        components: {
          UiSheet,
        },
        template: '<UiSheet>{{ args.default || "Splash Content" }}</UiSheet>',
      },
    },
  },
}
export const Default: Story = {}
