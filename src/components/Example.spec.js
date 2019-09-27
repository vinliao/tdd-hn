import { render, fireEvent, cleanup } from '@testing-library/vue'
import Example from './Example'

afterEach(cleanup)

it('increments dom on click', async () => {
  const { getByText } = render(Example)
  getByText('Clicks: 0')

  const button = getByText('increment!')
  await fireEvent.click(button)
  getByText('Clicks: 1')
})

it('displays some text on screen after user click', async () => {
  const { getByText, getByTestId } = render(Example)

  // const button = getByText('show')
  const button = getByTestId('coolbutton123')
  await fireEvent.click(button)

  getByText('some text!')
})

it('displays welcome message when form is filled', async () => {
  const personName = 'Vin'
  const { getByPlaceholderText, getByText } = render(Example)
  const nameInput = getByPlaceholderText('Type in your name')
  await fireEvent.update(nameInput, personName)

  const button = getByText('Enter!')
  await fireEvent.click(button)

  // const { getByText, getByPlaceholderText }
  getByText('Hello there ' + personName)
})