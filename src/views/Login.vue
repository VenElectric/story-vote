<template>
  <div class="flex justify-center">
    <div class="flex flex-col self-center shadow-2xl bg-gradient-to-b from-gray-400 rounded-lg mt-60">
      <form @submit.prevent="login_user" class="shadow-inner">
        <div class="flex-initial p-5">
          <label class="flex self-start" for="email">E-mail</label>
          <input
            class="flex border-2 self-end placeholder-gray-400 rounded-md h-10 w-80 mt-5"
            type="email"
            name="email"
            placeholder="writer@example.com"
          />
        </div>
        <div class="flex-initial p-5">
          <label class="flex self-start" for="password">Password</label>
          <input
            class="flex border-2 self-end placeholder-gray-400 rounded-md h-10 w-80 mt-5"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <div v-if="error_msg">{{ error_msg }}</div>
        <button
          class="border-2 p-4 m-4 transition duration-500 ease-in-out bg-gray-200 border-gray-400 hover:bg-blue-200"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useRouter } from 'vue-router'

export default {
  name: "Login",
  data() {
    return {
      errormsg: null
    }
  },
   setup() {
    const auth = getAuth()
    const router = useRouter()
    let error_msg
    const login_user = async e => {
      const { email, password } = e.target.elements
      console.info(email.value)
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        router.push('/')
      } catch (e) {
       this.errormsg = e.message
       console.log(error_msg)
      }
    }
    return { login_user,error_msg }
  }
};
</script>

<style></style>
