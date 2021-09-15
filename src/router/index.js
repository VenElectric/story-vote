import { createRouter, createWebHistory } from 'vue-router'
import Feed from '../views/Feed.vue'
import Profile from '../views/Profile.vue'
import NewStories from '../views/NewStories.vue'
import DiscoverStories from '../views/DiscoverStories.vue'
import PopularStories from '../views/PopularStories.vue'
import MyProfile from '../views/MyProfile.vue'
import Stories from '../views/Stories.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import AddStory from '../views/AddStory.vue'
import { UserState } from '../firesinit'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{loggedout:true}
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed,
    meta:{loggedin:true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{loggedout:true}
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    meta:{loggedin:true}
  },
  {
    path: '/myprofile',
    name: 'MyProfile',
    component: MyProfile,
    meta:{loggedin:true}
  },
  {
    path: '/addstory',
    name: 'AddStory',
    component: AddStory,
    meta:{loggedin:true}
  },
  {
    path: '/stories',
    name: 'Stories',
    component: Stories,
    meta:{loggedin:true}
  },
  {
    path: '/stories/discover',
    name: 'DiscoverStories',
    component: DiscoverStories,
    meta:{loggedin:true}
  },
  {
    path: '/stories/new',
    name: 'NewStories',
    component: NewStories,
    meta:{loggedin:true}
  },
  {
    path: '/stories/hot',
    name: 'PopularStories',
    component: PopularStories,
    meta:{loggedin:true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to,from,next)=> {

  const userstate = await UserState()
  const loggedin = to.matched.some(routepath => routepath.meta.loggedin)
  const loggedout = to.matched.some(routepath => routepath.meta.loggedout)

  if (!userstate && loggedin) next('/login')
  else if (userstate && loggedout) next('/feed')
  else next()
})

export default router
