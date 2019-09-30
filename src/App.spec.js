import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/vue'
import { routes } from '@/routes'
import App from '@/App'
import api from '@/api'
import flushPromises from 'flush-promises'

beforeEach(cleanup)

// OR

// afterEach(() => {
//   // router link push /
// })

describe('vue router', () => {
  const fake_data = [
    { title: 'title number 1', url: 'item?id=20952028', id: 1 },
    { title: 'title number 2', url: 'item?id=20215129', id: 2 },
  ]

  api.get = jest.fn((resource, slug) => {
    if (resource == 'news') {
      return Promise.resolve({ data: fake_data })
    }

    else if (resource == 'item') {
      return Promise.resolve({
        data: {
          // it's okay to return wrong data, we don't care about
          // testing the commentpage anyway
          comments: fake_data
        }
      })
    }
  })

  // this means to test router-view, test it on the root of the tree
  it('renders comment page when comment link is clicked', async () => {
    const { getAllByTestId, getByTestId } = render(App, { routes })

    // wait out the request to resolve in mounted()
    await flushPromises()

    // pick the first comment
    const firstComment = getAllByTestId('comment-link')[0]
    await fireEvent.click(firstComment)

    getByTestId('comment-page')

    // another alternative of asserting
    // const locationDisplay = getByTestId('location-display')
    // expect(locationDisplay).toHaveTextContent('/comment/' + String(fake_data[0].id))
  })

  it('renders user page when author link is clicked', () => { })
})