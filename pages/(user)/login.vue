<script lang="ts" setup>
import {z} from 'zod';
import {zodResolver} from '@primevue/forms/resolvers/zod';

const toast = useToast();
const supabase = useSupabaseClient()

const CredentialsSchema = z.object({
  email: z.string().min(3).email(),
  password: z.string().min(8),
})

const resolver = ref(zodResolver(CredentialsSchema));

type Credentials = z.infer<typeof CredentialsSchema>

const initialValues = reactive<Credentials>({email: '', password: ''});

const signIn = async (credentials: Credentials) => {
  console.log('login')
  const {error} = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  })
  if (error) console.log(error)
}

async function onFormSubmit(event) {
  console.log(typeof event)
  console.log(event)
  console.log(event.valid)
  if (event.valid) {
    await signIn(event.values)
  }
}

async function onLoginWithGoogle() {
  supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: '/dashboard',
    }
  })
}
</script>
<template>
  <p-form v-slot="$form" :resolver :initialValues @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-60">
    <div class="flex flex-col gap-1">
      <p-input-text name="email" type="text" placeholder="username" fluid/>
      <p-message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{
          $form.email.error.message
        }}
      </p-message>
    </div>
    <div class="flex flex-col gap-1">
      <p-password name="password" placeholder="Password" :feedback="false" toggleMask fluid/>
      <p-message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
        <ul class="my-0 px-4 flex flex-col gap-1">
          <li v-for="(error, index) of $form.password.errors" :key="index">{{ error.message }}</li>
        </ul>
      </p-message>
    </div>
    <p-button type="submit" severity="secondary" label="Submit"/>
  </p-form>
  <p-button @click="onLoginWithGoogle">Login With Google</p-button>
</template>
