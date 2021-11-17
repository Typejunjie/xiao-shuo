<template>
  <div>
    <great-tapbar/>
    <router-view :height="'84vh'"></router-view>
    <bottontap></bottontap>
  </div>
</template>

<script>
import Bottontap from './components/Private/bottontap.vue'
import greatTapbar from './components/Private/greatTapbar.vue'

export default {
  components: { greatTapbar, Bottontap },
  
}
</script>

<style>
@import url('./commonCss/reaset.css');

</style>
