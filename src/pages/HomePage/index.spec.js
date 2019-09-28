import { render, fireEvent } from '@testing-library/vue'
import HomePage from './index'
import api from '@/api'
import '@testing-library/jest-dom/extend-expect'
import _ from 'lodash'
import flushPromises from 'flush-promises'

describe('HomePage', () => {
  it('renders the data in the correct amount', async () => {
    const fake_data = [
      { title: 'title number 1', url: 'http://title1.com' },
      { title: 'title number 2', url: 'http://title2.com' },
      { title: 'title number 3', url: 'http://title3.com' }
    ]

    api.get = jest.fn(() => {
      return Promise.resolve({ data: fake_data })
    })

    const { getAllByTestId } = render(HomePage)

    // wait out the request to resolve in mounted()
    await flushPromises()

    const articleList = getAllByTestId('article-link')

    expect(articleList).toHaveLength(fake_data.length)

  })


  it('renders comment page with right id when comment link is clicked', () => {})

  it('renders comment page if article link is clicked and is a hn comment', () => {})

  it('goes to article page when it\'s article link is clicked', () => {

    // // this feels like testing implementation details of anchor tag...
    // const firstArticle = getByText(fake_data[0].title)
    // // FIXME: this doesn't work
    // await fireEvent.click(firstArticle)

    // // assert the current browser url
    // expect(window.location.href).toEqual(fake_data[0].url)
  })
  
})