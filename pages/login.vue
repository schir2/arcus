<script setup lang="ts">
const supabase = useSupabaseClient()
const initialValues = {email: '', password: ''}
const form =
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
  <Form v-slot="$form" :initialValues @submit="signInWithOtp" class="flex flex-col gap-4 w-full sm:w-60">
    <div class="flex flex-col gap-1">
      <InputText name="username" type="text" placeholder="Username" fluid />
      <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error.message }}</Message>
    </div>
    <div class="flex flex-col gap-1">
      <Password name="password" placeholder="Password" :feedback="false" toggleMask fluid />
      <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
        <ul class="my-0 px-4 flex flex-col gap-1">
          <li v-for="(error, index) of $form.password.errors" :key="index">{{ error.message }}</li>
        </ul>
      </Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
  </Form>
</template>