import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import Details from '@/modules/details/Details.vue'

describe('Search pokemon by url parameter.', () => {
  it('Should Details component is rendered.', async () => {
    const wrapper = mount(App)
    expect(wrapper.findComponent(Details).exists()).toBe(true)
  })
})

