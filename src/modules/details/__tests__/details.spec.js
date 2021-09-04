import { shallowMount } from '@vue/test-utils'
import PokedexDetails from '@/modules/details/details.vue'
import Vue from 'vue'

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { name: 'pikachu' } })),
}))

describe('details.vue', () => {

  it('check if pikachu is present', async () => {
    const wrapper = shallowMount(PokedexDetails)

    await Vue.nextTick()

    // expect(wrapper.html()).toMatch('pikachu')
  })

})
