<script setup lang="ts">
import type {IconName} from "~/components/base/ico.vue";

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const router = useRouter()

const items = ref([
  {
    separator: true
  },
  {
    label: 'Home',
    items: [
      {
        label: 'Home',
        icon: 'home',
        command: ()=>{
          router.push('/')
        }
      },
      {
        label: 'Inbox',
        icon: 'inbox',
        command: ()=>{
          router.push('/inbox')
        }
      },
      {
        label: 'Dashboard',
        icon: 'dashboard',
        command: ()=>{
          router.push('/dashboard')
        }
      },
    ],
  },
  {
    label: 'Projects',
    items: [
      {
        label: 'All Projects',
        icon: 'project',
        command: ()=>{
          router.push('/projects')
        }
      },
    ],
  },
  {
    label: 'Profile',
    items: [
      {
        label: 'Settings',
        icon: 'settings',
      },
      {
        label: 'Notifications',
        icon: 'notification',
        badge: 2
      },
      {
        label: 'Logout',
        icon: 'logout',
      }
    ]
  },
  {
    separator: true
  }
]);
</script>
<template>
  <p-menu :model="items" class="w-full justify-between md:w-60">
    <template #item="{ item, props }">

      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <base-ico :name="item.icon as IconName"/>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
        <base-ico :name="item.icon as IconName"/>
        <span class="ml-2">{{ item.label }}</span>
      </a>

    </template>
    <template #end>
      <client-only>
        <div class="flex h-full items-end gap-2">
          <p-button v-if="user" @click="supabase.auth.signOut()">Logout</p-button>
          <p-button v-else @click="$router.push('/login')">Login</p-button>
          <p-avatar v-if="user?.user_metadata?.avatar_url" :image="user.user_metadata.avatar_url" shape="circle"/>
        </div>
      </client-only>
    </template>
  </p-menu>
</template>