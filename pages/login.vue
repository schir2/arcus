<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

const signInWithOtp = async () => {
  console.log('login')
  const {error} = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) console.log(error)
}
</script>
<template>
  <div>
    Username
    <input v-model="email"/>{{email}}
    Password?
    <input v-model="password"/>{{password}}
    <button @click="signInWithOtp">
      Sign In with E-Mail
    </button>
  </div>
</template>