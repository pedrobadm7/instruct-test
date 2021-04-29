<template>
  <div class="v-form">
    <h1>Procura por alguém em específico?</h1>
    <v-row class="v-form" align="center" justify="space-around">
      <v-col cols="12" sm="6" class="v-col">
        <v-text-field
          type="search"
          placeholder="Procure por um nome ou categoria de empresa"
          class="v-text-field"
          :value="value"
          @input.native="$emit('input', $event.target.value)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import './style.scss'
export default {
  props: {
    value: {
      type: [String, Number],
      default: String,
    },
  },
  methods: {
    search(text) {
      this.$emit('input', text)
    },
  },
}
</script>

<style lang="scss" scoped="true"></style>
