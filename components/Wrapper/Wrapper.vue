<template>
  <div>
    <SearchBar v-model="search" />
    <Leads :leads="filteredCards" />
  </div>
</template>

<script>
import SearchBar from '../SearchBar/SearchBar'
import Leads from '../Leads/Leads'
import api from '../../services/api.js'

export default {
  components: {
    SearchBar,
    Leads,
  },
  data: () => ({
    cards: [],
    search: '',
  }),
  computed: {
    filteredCards() {
      return this.cards.filter((card) => {
        return card.name.toLowerCase().match(this.search.toLowerCase())
      })
    },
  },

  created() {
    api.get().then((response) => {
      this.cards = response.data
    })
  },
}
</script>
