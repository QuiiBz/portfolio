<template>
  <div class="project-container" :style="{ animationDelay }">
    <NuxtLink :href="mainLink" target="_blank" :class="{ deprecated: project.deprecated }" class="project">
      <div class="title-container">
        <h2>
          {{ project.name }}
        </h2>
        <span v-if="project.note" class="contributor-badge">{{ project.note }}</span>
      </div>
      <p>{{ project.description }}</p>
    </NuxtLink>
    <NuxtLink v-if="showGitHub" :href="gitHubLink" target="_blank" class="github-icon">
      <GitHubLogoIcon />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Project } from '~/data';

const props = defineProps<{
  project: Project
  animationDelay: string
}>()

const getGitHubLink = (project: Project) => `https://github.com/${project.github}`
const getMainLink = (project: Project) => project.url || getGitHubLink(project)

const mainLink = getMainLink(props.project)
const gitHubLink = getGitHubLink(props.project)
const showGitHub = computed(() => getMainLink(props.project) !== getGitHubLink(props.project))
</script>
