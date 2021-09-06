import axios from 'axios'
import { shallowMount } from '@vue/test-utils'
import PokedexDetails from '@/modules/details/details.vue'
import Vue from 'vue'

global.window = Object.create(window)

Object.defineProperty(window, 'location', {
  value: {
    pathname: '/1',
    href: '/1',
    assign: jest.fn(),
  }
})

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({
    data: {
      name: 'pikachu',
      sprites: {
        other: {
          dream_world: {
            front_default: '__MOCKED-URL__'
          }
        }
      },
      base_experience: 69,
    }
  })),
}))


describe('details.vue', () => {
  it('check if pikachu is present', async () => {
    const wrapper = shallowMount(PokedexDetails)
    await Vue.nextTick()
    expect(wrapper.html()).toMatch('pikachu')
    expect(wrapper.html()).toMatch('69')
    expect(wrapper.html()).toMatch('__MOCKED-URL__')
  })

  it('check if pathname is used in fetchData method', async () => {
    shallowMount(PokedexDetails)
    await Vue.nextTick()
    expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1')
  })

  it('if pathname is not present in url, application must be redirected to error\'s page', async () => {
    window.location.pathname = ''
    shallowMount(PokedexDetails)
    await Vue.nextTick()
    expect(window.location.assign).toHaveBeenCalledWith('http://pokedex.caroninhadev.com/error')
  })

})

