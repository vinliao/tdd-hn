import { shallowMount } from '@vue/test-utils'
import HomePage from '@/pages/HomePage'

describe('HomePage', () => {
  it('is sane', () => {
    expect(true).toBe(true)
  })

  it('gets post data from server', () => {

  })

  it('does some fake mocks', () => {
    // const mock = jest.fn((num) => num+4)
    const mock = jest.fn()
    const result = mock()

    expect(result).toBeUndefined()
    expect(mock).toHaveBeenCalled()
  })
})