<template>
  <div class="v-form">
    <h1>Procura por alguém em específico?</h1>
    <v-row class="v-form" align="center" justify="space-around">
      <v-col cols="12" sm="6" class="v-col">
        <v-text-field
          type="search"
          placeholder="Procure por nome ou categoria"
          class="v-text-field"
          :value="search"
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
    search: {
      type: [String, Number],
      default: String,
    },
  },
}
</script>

