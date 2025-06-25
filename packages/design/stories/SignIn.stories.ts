import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { userEvent, within } from '@storybook/testing-library'
import InteractionSignIn from '~/components/interaction/SignIn.vue'

const meta = {
  title: 'Interaction/SignIn',
  component: InteractionSignIn,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'sign in element',
      },
    },
  },
} satisfies Meta<typeof InteractionSignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => ({
    components: { InteractionSignIn },
    setup() {
      return { args }
    },
    template: `
      <InteractionSignIn v-bind="args" />
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('identity'), 'hi@example.com')

    await userEvent.click(canvas.getByRole('button'))
  },
}
