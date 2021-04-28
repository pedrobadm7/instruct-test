<template>
  <div class="container">
    <h1 class="leads__title">Leads</h1>
    <main class="Leads">
      <div v-for="(item, id) in leads" :key="id" class="content">
        <img
          src="https://image.flaticon.com/icons/svg/149/149992.svg"
          class="img-profile"
        />

        <div class="infos">
          <div class="items">
            <fa-icon icon="user" />
            <h1>Nome:</h1>

            <p>{{ item.name }}</p>
          </div>
          <div class="items">
            <fa-icon icon="envelope" />
            <h1>E-mail:</h1>

            <p>{{ item.email }}</p>
          </div>
          <div class="items">
            <fa-icon icon="phone-square-alt" />
            <h1>Telefone:</h1>

            <p>{{ item.phone }}</p>
          </div>
          <div class="items">
            <fa-icon icon="building" />
            <h1>Company:</h1>

            <p>{{ item.company.name }}</p>
          </div>
        </div>
      </div>
    </main>
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
