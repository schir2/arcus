<script lang="ts" setup>
</script>
<template>
  <main class="grid-container gap-1">
    <base-top-nav style="grid-area:top-nav"/>
    <base-left-menu style="grid-area:left-menu"/>
    <div style="grid-area:content">
      <slot/>
    </div>
  </main>
</template>
<style scoped>
.grid-container {
  display: grid;
  min-height: 100vh;
  grid-template-columns:auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "top-nav top-nav"
  "left-menu content"
}
</style>
