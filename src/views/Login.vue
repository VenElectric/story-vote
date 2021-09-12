<template>
  <div class="flex justify-center">
    <div class="flex flex-col self-center shadow-2xl">
  <div class="flex-initial p-5"><label class="flex self-start" for='email'>E-mail</label> <input class="flex border-2 self-end placeholder-gray-400 rounded-md h-10 w-80 mt-5" type="email" name="e-mail" v-model="email" placeholder=" writer@example.com"></div>
  <div class="flex-initial p-5"> <label  class="flex self-start"  for='password'>Password</label> <input class="flex border-2 self-end placeholder-gray-400 rounded-md h-10 w-80 mt-5" type="password" name="password" v-model="password" placeholder=" password"></div>
      <button class="border-2 p-4 m-4 transition duration-500 ease-in-out border-gray-400 hover:bg-purple-200">Login</button>
      </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
    name:"Login",
    methods:{
      login: function(){
        firebase.auth().signInWith
      }
    }
}
</script>

<style>

</style>