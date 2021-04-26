<template>
  <div id="leads">
    <Header />
    <Leads />
  </div>
</template>

<script>
import Header from '../components/Header'
import Leads from '../components/Leads/Leads'
export default {
  name: 'App',
  components: {
    Header,
    Leads,
  },
}
</script>

<style lang="scss" scoped="true"></style>
