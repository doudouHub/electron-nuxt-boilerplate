<template>
  <section class="container">
    <div>
      <img width="256" src="~/assets/resources/icons/icon.png">
      <h1>Links</h1>
      <h2><nuxt-link :to="{ name: 'index' }">&lt;- Back</nuxt-link></h2>
      <nav>
        <ul>
          <li><a href="https://nuxtjs.org/" target="_blank" class="btn btn-primary">Documentation</a></li>
          <li><a href="https://github.com/nuxt/nuxt.js" target="_blank" class="btn btn-primary">GitHub</a></li>
          <li><a href="https://electronjs.org/" target="_blank" class="btn btn-secondary">Electron</a></li>
          <li><a href="https://github.com/electron-userland/electron-builder" target="_blank" class="btn btn-secondary">Electron Builder</a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>

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

    nav {
      margin-top: 5px;

      ul {
        list-style: none;
        width: 100%;

        li {
          display: inline-block;
          a {
            padding: 5px;

            .btn {
              margin: 0 8px;
            }
          }
        }
      }
    }
  }
</style>
