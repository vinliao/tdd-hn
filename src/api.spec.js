// jest.mock('@/api')
import api from '@/api'

describe('api', () => {
  it('dummy post function', async () => {
    api.post = jest.fn(() => 200)

    const fake_data = {
      hello: 'world'
    }

    await api.post('fake', fake_data)
    
    // instead of involving the database and stuff, to test the
    // post request, we just need to assert whether it's
    // being called with the right params
    expect(api.post).toHaveBeenCalledWith('fake', fake_data)
  })
})