<script lang="ts">
export default {
  name: 'Home-View'
}
</script>
<script setup lang="ts">
//COMPONENTS
import VHeader from '@/components/VHeader.vue'
import VFooter from '@/components/VFooter.vue'
import VWelcome from '@/components/VWelcome.vue'
import VList from '@/components/VList.vue'
</script>
<template>
  <main>
    <VHeader />
    <VWelcome />
    <VList />
    <VFooter />
  </main>
</template>
