import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/vue'
import { routes } from '@/routes'

import App from '@/App'

// I actually can modify this to my liking...
describe('vue router', () => {
  it('goes through the full route', async () => {
    const { getByTestId } = render(App, { routes })
    expect(getByTestId('location-display')).toHaveTextContent('/')

    const commentLink = getByTestId('comment-link')
    await fireEvent.click(commentLink)

    expect(getByTestId('location-display')).toHaveTextContent('/comment/3')
  })

})