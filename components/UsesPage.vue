<template>
  <div class="container">
    <h1 class="title">
      <span v-for="(letter, index) in USES" :style="{ animationDelay: `${(index + 2) / 10}s` }">{{ letter }}</span>
    </h1>
    <p class="subtitle hidden" :style="{ animationDelay: '0.3s' }">
      Zen, Raycast, Rectangle Pro, OrbStack
    </p>
    <p class="subtitle hidden" :style="{ animationDelay: '0.4s' }">
      Ghostty, Jetbrains Mono, Catppuccin Macchiato
    </p>
    <p class="subtitle hidden" :style="{ animationDelay: '0.5s' }">
      Neovim, tmux, lazygit, zsh
    </p>
  </div>
</template>

<script setup lang="ts">
const USES = 'uses'.split('')
</script>
