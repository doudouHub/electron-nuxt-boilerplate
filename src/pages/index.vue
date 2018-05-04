<template>
  <section class="container">
    <div>
      <img width="256" src="~/assets/resources/icons/icon.png">
      <h1>Hello World!</h1>
      <h2><nuxt-link :to="{ name: 'links' }">Nuxt + Electron</nuxt-link></h2>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(0deg, rgba(71,184,132,0.5) 0%, rgba(62,126,111,0.5) 41%, rgba(54,72,93,0.5) 100%);

    h1 {
      margin-top: 5px;
      font-size: 40px;
    }

    h2 {
      margin-top: 5px;
      font-size: 20px;
    }
  }

</style>
