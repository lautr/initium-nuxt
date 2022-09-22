import UiButton from '../components/ui/Button.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'UI/Button',
  component: UiButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { UiButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <UiButton>
      <template v-if="args.content" slot="default">{{ args.content }}</template>
    </UiButton>
  `,
})

export const Button = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Button.args = {
  content: 'Button',
}
