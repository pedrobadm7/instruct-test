<template>
  <div class="leadsOff">
    <h1 class="leads">Lead não encontrado</h1>
  </div>
</template>

<script>
import './style.scss'
export default {
  name: 'Leads',
  props: {
    leads: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
