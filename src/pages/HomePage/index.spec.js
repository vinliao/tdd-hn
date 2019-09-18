import { shallowMount } from '@vue/test-utils'
import HomePage from '@/pages/HomePage'

describe('HomePage', () => {
  it('is sane', () => {
    expect(true).toBe(true)
  })

  it('gets post data from server', () => {
    // Q:
    // 1. How do I assert that the api call is done correctly?
    // 2. How di mock the api call to the server (since it's async)
    // 3. How does this relate to component contract?

  })

  it('does some fake mocks', () => {
    // const mock = jest.fn((num) => num+4)
    const mock = jest.fn()
    const result = mock()

    expect(result).toBeUndefined()
    expect(mock).toHaveBeenCalled()
  })
})