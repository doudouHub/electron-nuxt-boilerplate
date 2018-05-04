<template>
  <app-window>
    <nuxt/>
  </app-window>
</template>

<script>
  import Window from '~/components/window'
  export default {
    name: 'default',
    components: {
      'app-window': Window
    }
  }
</script>
