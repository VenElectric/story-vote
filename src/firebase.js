import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getStorage } from "firebase/storage";

import { initializeApp } from 'firebase/app'

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCRbo02vJMPCFVeUlECnb02WI5vf2xdEno",

    authDomain: "my-portfolio-9a79a.firebaseapp.com",
  
    projectId: "my-portfolio-9a79a",
  
    storageBucket: "my-portfolio-9a79a.appspot.com",
  
    messagingSenderId: "467393306204",
  
    appId: "1:467393306204:web:3f641c7ab659016b2dd099"
  
})

export const storage = getStorage(firebaseApp);

export const UserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  )

export const AuthState = () => {
  const user = ref(null)
  const error = ref(null)

  const auth = getAuth()
  let unsubscribe
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      user_value => (user.value = user_value),
      error_value => (error.value = error_value)
    )
  })
  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value != null)

  return { user, error, isAuthenticated }
}