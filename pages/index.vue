<template>
  <div id="App">
    <Header />
    <Wrapper />
    <Header />
  </div>
</template>

<script>
import Header from '../components/Header'
import Wrapper from '../components/Wrapper/Wrapper'
export default {
  name: 'App',
  components: {
    Header,
    Wrapper,
  },
}
</script>

<style lang="scss" scoped="true"></style>
