import { $fetch, setup } from '@nuxt/test-utils-edge'
import { describe, expect, it } from 'vitest'

describe('pages', async () => {
  await setup({
    server: true,
  })
  it('render index', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Authenticate')
  })
})
