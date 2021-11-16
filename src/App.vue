<template>
  <div>
    <great-tapbar/>
    <router-view></router-view>
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
@import url('./fontawesome/css/all.min.css');


</style>
