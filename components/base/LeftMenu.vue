<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const router = useRouter()

const items = ref([
  {
    separator: true
  },
  {
    label: 'Projects',
    items: [
      {
        label: 'Dashboard',
        icon: 'pi pi-dashboard',
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
        icon: 'pi pi-cog',
      },
      {
        label: 'Messages',
        icon: 'pi pi-inbox',
        badge: 2
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
      }
    ]
  },
  {
    separator: true
  }
]);
</script>
<template>
  <p-menu :model="items" class="w-full md:w-60">
    <template #item="{ item, props }">

      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon"/>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon"/>
        <span class="ml-2">{{ item.label }}</span>
      </a>

    </template>
    <template #end>
      <client-only>
        <div class="flex items-center gap-2">
          <p-button v-if="user" @click="supabase.auth.signOut()">Logout</p-button>
          <p-button v-else @click="$router.push('/login')">Login</p-button>
          <p-avatar v-if="user?.user_metadata?.avatar_url" :image="user.user_metadata.avatar_url" shape="circle"/>
        </div>
      </client-only>
    </template>
  </p-menu>
</template>