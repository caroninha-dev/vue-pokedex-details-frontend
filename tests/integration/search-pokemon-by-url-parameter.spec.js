import Vue from 'vue'
import axios from 'axios'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

global.window = Object.create(window)

Object.defineProperty(window, 'location', {
  value: {
    pathname: '/1'
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

describe('Search pokemon by url parameter.', () => {
  it('Should pikachu\'s name appears by passing number 1 from url param.', async () => {
    const wrapper = mount(App)

    await Vue.nextTick()

    expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1')
    expect(wrapper.html()).toMatch('pikachu')
  })
})

