<template>
  <div id="app">
    <headers></headers>

    <router-view/>
    <footers></footers>
  </div>
</template>

<script>
  import heads from '@component/common/header'
  import foots from '@component/common/footer'
export default {
  name: 'app',
  components: {
    headers: heads,
    footers:foots
  }
}
</script>

<style lang="scss">
  @import "css/common/common.scss";
  @import "css/common/base.scss";
</style>
