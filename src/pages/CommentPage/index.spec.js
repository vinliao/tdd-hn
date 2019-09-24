import { shallowMount } from '@vue/test-utils'
import CommentPage from '@/pages/CommentPage'

describe('CommentPage', () => {
  it('has the route id params', () => {
    const params = {
      id: 1
    }

    const wrapper = shallowMount(CommentPage, {
      mocks: {
        $routes: {
          params,
        }
      }
    })

    expect(wrapper.text()).toContain(params.id)
    expect(wrapper.vm.id).toEqual(params.id)
  })
})