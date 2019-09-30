import { render, fireEvent } from '@testing-library/vue'
import HomePage from './index'
import api from '@/api'
import '@testing-library/jest-dom/extend-expect'
import flushPromises from 'flush-promises'
import { routes } from '@/routes'
import _ from 'lodash'

describe('HomePage', () => {
  const fake_data = [
    { title: 'title number 1', url: 'item?id=20952028', id: 1 },
    { title: 'title number 2', url: 'http://title2.com', id: 2 },
    { title: 'title number 3', url: 'http://title3.com', id: 3 }
  ]

  api.get = jest.fn(() => {
    return Promise.resolve({ data: fake_data })
  })

  it('renders the data in the correct amount', async () => {
    const { getAllByText } = render(HomePage, { routes })

    // wait out the request to resolve in mounted()
    await flushPromises()

    // make sure article length is correct
    const articleList = getAllByText('title number', {exact: false})
    expect(articleList).toHaveLength(fake_data.length)
  })
})