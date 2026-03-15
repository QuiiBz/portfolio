<template>
  <div class="noise" />
  <section class="bordered-section">
    <NuxtPage />
  </section>
  <Footer />
  <SpeedInsights />
</template>

<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
