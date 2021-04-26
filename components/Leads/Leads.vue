<template>
  <div class="container">
    <h1 class="leads__title">Leads</h1>
    <main class="Leads">
      <div v-for="(item, id) in lead" :key="id" class="content">
        <img
          src="https://image.flaticon.com/icons/svg/149/149992.svg"
          class="img-profile"
        />

        <div class="infos">
          <div class="items">
            <h1>Nome:</h1>

            <p>{{ item.name }}</p>
          </div>
          <div class="items">
            <h1>E-mail:</h1>

            <p>{{ item.email }}</p>
          </div>
          <div class="items">
            <h1>Telefone:</h1>

            <p>{{ item.phone }}</p>
          </div>
          <div class="items">
            <h1>Compay Bs:</h1>

            <p>{{ item.company.bs }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import './style.scss'
import api from '../../services/api.js'
export default {
  name: 'Leads',
  data() {
    return {
      lead: [],
    }
  },
  mounted() {
    api.get().then((response) => {
      this.lead = response.data
    })
  },
}
</script>

<style lang="scss" scoped="true"></style>
