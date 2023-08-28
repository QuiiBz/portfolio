<template>
  <div class="projects">
    <ProjectCard v-for="(project, index) in PROJECTS" :project="project" :animation-delay="`${((index + 2) / 10)}s`" />
  </div>
</template>

<script setup lang="ts">
const { data: PROJECTS } = useFetch('/api/projects')
</script>
