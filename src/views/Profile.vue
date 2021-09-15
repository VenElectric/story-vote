<template>
  <div class="flex">
    <div class="flex flex-1 justify-center"></div>
    <div class="flex flex-1 justify-center">
      <section
        class="flex-initial mt-20 border-2 border-blue-400 rounded-md w-1/5 bg-gray-200"
      >
        <div class="py-1">
          
            <NoProfile v-if="link_display"/>
            <img v-else
            id="profile_photo"
            alt="profile photo"
            class="rounded-lg px-2 mt-1 mb-2 object-contain"
          />
        </div>
          <div class="border-t-2 border-blue-300">{{feed?.name}}</div>
    </section>
    </div>
    </div>
     
  <section>
    <h2>List of Stories</h2>

    <div>
      <ul class="mt-8 flex flex-col items-center justify-center gap-y-12">
        <li
          class="flex flex-col items-center justify-center border-4 border-blue-500 w-1/4 gap-x-2 h-auto drop-shadow-2xl ring-4 p-6 rounded-lg bg-gray-200"
          v-for="item in stories"
          :key="item.id"
        >
          <div class="flex flex-row shadow-inner border-b-2 py-1">
            <h2 class="px-2">{{ item.title }}</h2>
          </div>
          <div class="flex-1">
            <p class="whitespace-normal p-2">{{ item.text }}</p>
            <button
              class="border-2 mb-0 mt-1 rounded-lg p-1 transition duration-300 ease-in-out border-blue-400 hover:bg-blue-200 hover:ring-4"
            >
              Continue Reading...
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { storage } from "../firesinit";
import { ref, getDownloadURL } from "firebase/storage"
import NoProfile from '../components/NoProfile.vue'
export default {
  name: "Profile",
  components:{NoProfile},
  data() {
    return {
      stories: [],
      feed: null,
      link_display:true

    };
  },
  mounted() {
    this.get_feed();
    this.get_profile_photo();
  },
  methods: {
    get_feed: async function() {
      this.$axios
        .get(`http://localhost:3000/profiles?id=${this.$route.params.id}`)
        .then((data) => {
          this.feed = data.data[0];
        })
        .then(() => {
          this.get_stories();
        })
        .catch((error) => {
          console.warn(error);
        });
    },
    get_stories: async function() {
      for (let item in this.feed.stories) {
        this.$axios
          .get(
            `http://localhost:3000/stories/?id=${this.feed.stories[item].id}`
          )
          .then((data) => {
            this.stories.push(data.data[0]);
          })
          .catch((error) => {
            console.warn(error);
          });
      }
    },
    get_profile_photo: function() {
      let spaceRef = ref(
        storage,
        this.$route.params.id + "/profilePicture/profilephoto.jpg"
      );
    
      getDownloadURL(spaceRef)
        .then((url) => {
          let img = document.getElementById("profile_photo");
          img.setAttribute("src", url);
          this.link_display = false
        })
        .catch(() => {
          this.link_display=true
        });
    },
  },
};
</script>

<style></style>
