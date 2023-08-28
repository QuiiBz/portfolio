<template>
  <div class="container">
    <h1 class="title">
      <span v-for="(letter, index) in TOM" :style="{ animationDelay: `${(index + 2) / 10}s`}">{{letter}}</span>
      <br />
      <span v-for="(letter, index) in LIENARD" :style="{ animationDelay: `${(index + 4) / 10}s` }">{{letter}}</span>
    </h1>
    <p class="subtitle" :style="{ animationDelay: '1s' }">
      crafting softwares at <img src="/scaleway.png" alt="Scaleway logo" class="icon" /> Scaleway
      <span class="prev">
        <span class="exp" data-desc="Founder">
          2022-now ⸺ <img src="/lagon.png" alt="Lagon.app logo" class="icon" /> <NuxtLink href="https://lagon.app" target="_blank">Lagon</NuxtLink>
        </span>
        <span class="exp" data-desc="Frontend developer">
          2021-now ⸺ <img src="/scaleway.png" alt="Scaleway logo" class="icon" /> <NuxtLink href="https://scaleway.com" target="_blank">Scaleway</NuxtLink>
        </span>
        <span class="exp" data-desc="Engine & open-source">
          2021-22&nbsp;&nbsp;&nbsp;&nbsp;&#8201;⸺ <img src="/fig.webp" alt="Fig.io logo" class="icon" /> <NuxtLink href="https://fig.io" target="_blank">Fig</NuxtLink>
        </span>
      </span>
    </p>
    <p class="subtitle hidden" :style="{ animationDelay: '1.1s' }">
      enjoys Cloud, Open Source, playing Piano
    </p>
    <p class="subtitle map" :style="{ animationDelay: '1.2s' }">lives in 🇫🇷 Paris
      <span class="background">
        <img src="/paris.jpg" alt="Map of Paris" />
      </span>
    </p>
    <p class="subtitle socials" :style="{ animationDelay: '1.3s' }">
      <NuxtLink href="https://github.com/QuiiBz" target="_blank">
        <GitHubLogoIcon />
      </NuxtLink>
      <NuxtLink href="https://twitter.com/tomlienard" target="_blank">
        <TwitterLogoIcon />
      </NuxtLink>
      <NuxtLink href="https://linkedin.com/in/tom-lienard/" target="_blank">
        <LinkedInLogoIcon />
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
const TOM = 'tom'.split('')
const LIENARD = 'lienard'.split('')
</script>
