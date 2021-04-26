<template>
  <div>
    <header>
      <Logo />
    </header>
    <div class="line" />
  </div>
</template>

<script>
import Logo from './Logo'

export default {
  name: 'Header',
  components: Logo,
}
</script>

<style lang="scss" scoped="true">
header {
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 25px;
}

.line {
  width: 100%;
  height: 1px;
  background-color: $border-color;
}
</style>
