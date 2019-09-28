import { render, fireEvent } from '@testing-library/vue'
import CommentPage from './index'
import api from '@/api'
import { routes } from '@/routes'
import flushPromise from 'flush-promises'
import '@testing-library/jest-dom/extend-expect'

describe('CommentPage', () => {
  it('renders the right amount of comment and in the right order', async () => {
    // const fake_data = {
    //   comments: [
    //     {content: "one", comments: [
    //       {content: "six"},
    //       {content: "seven", comments: [
    //         {content: "eight"},
    //         {content: "nine"},
    //       ]},
    //     ]},
    //     {content: "two"},
    //     {content: "three", comments: [
    //       {content: "four"},
    //       {content: "five"}
    //     ]},
    //   ]
    // }

    const totalComment = 3
    const fake_data = [
      { content: "one" , comments: [
        { content: "four" }
      ]},
      { content: "two" },
      { content: "three" },
    ]


    // TODO: Damn dude, it's actually pretty challenging!
    // how do I mock the data?
    api.get = jest.fn(() => {
      return Promise.resolve(fake_data)
    })

    const { getAllByTestId } = render(CommentPage, { routes })
    await flushPromise()

    const commentList = getAllByTestId('comment-content')
    expect(commentList).toHaveLength(totalComment)

    // Q: how do I get all the comment content?

  })

  // optional
  it('goes back to homepage when hn logo is clicked', () => { })
})
