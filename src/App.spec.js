import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, getByTestId } from '@testing-library/vue'
import { routes } from '@/routes'
import App from '@/App'
import api from '@/api'
import flushPromises from 'flush-promises'

// I actually can modify this to my liking...
// FIXME: Doing this calls the api.get
describe('vue router', () => {
  it('goes through the full route', async () => {})

  it('goes to comment page when comment link is clicked', async () => {
    const fake_data = [
      { title: 'title number 1', url: 'item?id=20952028', id: 1 },
      { title: 'title number 2', url: 'item?id=20215129', id: 2 },
    ]

    const fake_data_comments = [
      { content: "one" , comments: [
        { content: "four" , comments: [
          { content: "five" },
          { content: "six" },
        ]}
      ]},
      { content: "two", comments: [
        { content: "seven" },
        { content: "eight" },
        { content: "nine" },
      ]},
      { content: "three" },
    ]

    // TODO: put this mock in a separate folder and then import it here
    // to make it less messy
    api.get = jest.fn((resource, slug) => {

      // the return of these data are structured differently
      // and I'd like to make them the same
      if(resource == 'news'){
        return Promise.resolve({ data: fake_data })
      }

      else if(resource == 'item'){
        return Promise.resolve({ data: {
          comments: fake_data_comments
        }})
      }
    })

    const { getAllByTestId, getByTestId } = render(App, {routes})

    // wait out the request to resolve in mounted()
    await flushPromises()

    // pick the first comment
    const firstComment = getAllByTestId('comment-link')[0]
    await fireEvent.click(firstComment)

    const locationDisplay = getByTestId('location-display')
    expect(locationDisplay).toHaveTextContent('/comment/' + String(fake_data[0].id))
  })

  it('renders author page when author link is clicked', () => {})
})