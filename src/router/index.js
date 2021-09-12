import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Profile from '../views/Profile.vue'
import NewStories from '../views/NewStories.vue'
import DiscoverStories from '../views/DiscoverStories.vue'
import PopularStories from '../views/PopularStories.vue'
import ProfileUser from '../views/ProfileUser.vue'
import Stories from '../views/Stories.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feed/:id',
    name: 'Personal Feed',
    component: MainPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile/:id',
    name: 'Profile Page',
    component: Profile
  },
  {
    path: '/myprofile/:id',
    name: 'Profile Page Logged In',
    component: ProfileUser
  },
  {
    path: '/stories',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/stories/discover',
    name: 'Discover',
    component: DiscoverStories
  },
  {
    path: '/stories/new',
    name: 'New Stories',
    component: NewStories
  },
  {
    path: '/stories/hot',
    name: 'Most Voted Stories',
    component: PopularStories
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
