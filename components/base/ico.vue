<template>
  <Icon :name="getIconifyName(name)"/>
</template>

<script setup lang="ts">

interface Props {
  name: IconName;
}

const props = defineProps<Props>();

const iconMap = {
  more: 'material-symbols:more-vert',
  create: 'mdi:add-circle',
  remove: 'material-symbols:close',
  delete: 'material-symbols:delete',
  add: 'material-symbols:add',
  table: 'material-symbols:table-view',
  drag: 'mdi:drag',
  frequency: 'mdi-calendar',

  // Theme
  darkTheme: 'material-symbols:dark-mode',
  lightTheme: 'material-symbols:light-mode',

  // Alert Types
  success: 'material-symbols-check-circle',
  warning: 'material-symbols:warning',
  error: 'material-symbols:error',
  info: 'material-symbols:info',

  // Collapsable
  down: 'material-symbols:arrow-drop-down',
  up: 'material-symbols:arrow-drop-up',

  // Auth
  login: 'fe-login',
  logout: 'fe-logout',
  notification: 'fe-notice-active',
  settings: 'material-symbols-settings',
  inbox: 'material-symbols-inbox',
  dashboard: 'material-symbols-dashboard',
  task: 'material-symbols-task',
  project: 'streamline-task-list-solid',


}

export type IconName = keyof typeof iconMap


function getIconifyName(name: IconName): string {
  return iconMap[name] ?? 'mdi:home'
}
</script>