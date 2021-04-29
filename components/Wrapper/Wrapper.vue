<template>
  <div>
    <SearchBar v-model="search" />
    <Leads v-if="filteredCards.length > 0" :leads="filteredCards" />
    <LeadsOff v-else />
  </div>
</template>

<script>
import SearchBar from '../SearchBar/SearchBar'
import Leads from '../Leads/Leads'
import LeadsOff from '../LeadsOff/LeadsOff'
import api from '../../services/api.js'

export default {
  components: {
    SearchBar,
    Leads,
    LeadsOff,
  },
  data: () => ({
    cards: [],
    search: '',
  }),
  computed: {
    filteredCards() {
      return this.cards.filter((card) => {
        return (
          card.name.toLowerCase().includes(this.search.toLowerCase()) ||
          card.company.bs.toLowerCase().includes(this.search.toLowerCase())
        )
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
