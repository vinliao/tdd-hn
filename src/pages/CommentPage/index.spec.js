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

    // fake_data above (which is a tree) is turned into an array using dfs.

    // these assertion is to make sure that the comments are
    // in the right order.

    // the value of 2nd comment is "four" and 6th comment is "two"
    // is because that's how the comments looks like when the fake_data
    // tree above has been sorted out into an array
    expect(commentList[0]).toHaveTextContent("one")
    expect(commentList[1]).toHaveTextContent("four")
    expect(commentList[4]).toHaveTextContent("two")
  })
})
