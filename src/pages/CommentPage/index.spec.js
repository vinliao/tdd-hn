import { render, fireEvent } from '@testing-library/vue'
import CommentPage from './index'
import api from '@/api'
import { routes } from '@/routes'
import flushPromise from 'flush-promises'
import '@testing-library/jest-dom/extend-expect'

describe('CommentPage', () => {
  it('renders the right amount of comment and in the right order', async () => {
    const totalComment = 9
    const fake_data = [
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

    // the comments from the response is accessed through
    // response.data.comments
    api.get = jest.fn(() => {
      return Promise.resolve({ data: {
        comments: fake_data
      }})
    })

    const { getAllByTestId } = render(CommentPage, { routes })
    await flushPromise()

    const commentList = getAllByTestId('comment-content')
    expect(commentList).toHaveLength(totalComment)

    // TODO:
    // how do I test whether this is in the correct order?
  })

  // optional
  it('goes back to homepage when hn logo is clicked', () => { })
})
