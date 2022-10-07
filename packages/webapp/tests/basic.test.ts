import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils-edge'

describe('pages', async () => {
  await setup({
    server: true,
  })
  it('render index', async () => {
    const html = await $fetch('/')

    // should render text
    expect(html).toContain('Authenticate')
  })
})
