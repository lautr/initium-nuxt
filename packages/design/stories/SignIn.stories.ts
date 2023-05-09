import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, within } from '@storybook/testing-library'
import InteractionSignIn from '~/components/interaction/SignIn.vue'

const meta: Meta<typeof InteractionSignIn> = {
  title: 'Interaction/SignIn',
  component: InteractionSignIn,
}

type Story = StoryObj<typeof InteractionSignIn>

export default meta
export const SignIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId('identity'), 'hi@example.com')

    await userEvent.click(canvas.getByRole('button'))
  },
}
