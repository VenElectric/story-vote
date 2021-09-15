<template>
  <div class="flex flex-auto mt-1" id="nav" v-if="authenticated">
      <div class="flex flex-1 justify-center rounded-md">
        <router-link class="px-2 bg-gray-200 rounded-md border-r-2 border-l-2 border-blue-600" to="/feed">Feed</router-link>
        <router-link class="px-2 bg-gray-200 rounded-md border-r-2 border-l-2 border-blue-600" to="/stories">Stories</router-link>
      </div>
    <div class="flex flex-1 justify-center rounded-md">
      <router-link class="px-2 bg-gray-200 rounded-md border-r-2 border-l-2 border-blue-600" to="/myprofile">My Profile</router-link>
      <button class="px-2 bg-gray-200 rounded-md border-r-2 border-l-2 border-blue-600" @click="signOutUser">Logout</button>
    </div>
  </div>
  <div class="flex-auto justify-start rounded-md" id="nav" v-else>
    <router-link class="px-1 bg-gray-200 rounded-md border-r-2 border-l-2 border-blue-600" to="/">Home</router-link>
    <router-link class="px-1 bg-gray-200 rounded-md border-r-2 border-l-2 border-blue-600" to="/login">Login</router-link>
  </div>
  <router-view />
</template>

<script>
import { AuthState } from "./firebase.js";

import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
export default {
  created() {
    const { isAuthenticated } = AuthState();
    this.authenticated = isAuthenticated;
  },
  data() {
    return {
      authenticated: false,
    };
  },
  setup() {
    const { user } = AuthState()
    const auth = getAuth()
    const router = useRouter()
    const signOutUser = async () => {
      try {
        await signOut(auth)
        router.push('/login')
      } catch (e) {
        alert(e.message)
      }
    }
    return { user, signOutUser }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: blue;
}
</style>
