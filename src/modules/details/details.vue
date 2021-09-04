<template>
  <div id="details">
    <div class="details__image">
      <img :src="image" />
    </div>
    <div class="details__name">      
      {{ name }}
    </div>
    <div class="details__exp">      
      {{ base_experience }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "PokedexDetails",
  data() {
    return {
      name: '',
      image: '',
      base_experience: 0,
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const pokemonId = window.location.pathname.replace('/', '').split('/').shift()
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      const response = await axios.get(url)

      this.name = response.data.name
      this.image = response.data.sprites.other.dream_world.front_default
      this.base_experience = response.data.base_experience
    }
  }
}

</script>
<style src="./pokedex-details.css"></style>