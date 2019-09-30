import { render, fireEvent } from '@testing-library/vue'
import HomePage from './index'
import api from '@/api'
import '@testing-library/jest-dom/extend-expect'
import flushPromises from 'flush-promises'
import { routes } from '@/routes'
import _ from 'lodash'

// FIXME: router link shows error "undefined" stuff
describe('HomePage', () => {
  it('renders the data in the correct amount', async () => {
    // if url doesn't start with http | https, then it's a comment link
    const fake_data = [
      { title: 'title number 1', url: 'item?id=20952028', id: 1 },
      { title: 'title number 2', url: 'http://title2.com', id: 2 },
      { title: 'title number 3', url: 'http://title3.com', id: 3 }
    ]

    api.get = jest.fn(() => {
      return Promise.resolve({ data: fake_data })
    })

    const { getAllByTestId, getByText } = render(HomePage, {routes})

    // wait out the request to resolve in mounted()
    await flushPromises()

    // make sure article length is correct
    const articleList = getAllByTestId('article-link')
    expect(articleList).toHaveLength(fake_data.length)

    // instead of testing whether clicking <a> tag will change the browser url
    // (which I feel like implementation details), check whether the title
    // is rendered with the right link (a tag) instead
    // randomly pick one fake data and assert it's existence
    const randomData = _.sample(fake_data)
    getByText(randomData.title)

  })

  // maybe this isn't really important...
  // it('renders comment page if article link is clicked and is a hn comment', () => {})
  // it('goes to article page when it\'s article link is clicked', async () => {})
  
})