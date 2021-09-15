<template>
  <div class="flex flex-col justify-center items-center">
      <section
        class="flex flex-col mt-20 w-1/3 h-1/6 justify-center items-center"
      >
        <div class="flex flex-col py-1 bg-blue-200 object-scale-down w-1/3 h-1/6">
          
          <NoProfile v-if="link_display" />
          <img
            v-else
            id="profile_photo"
            alt="profile photo"
            class="rounded-lg px-2 mt-1 mb-2 object-scale-down"
          />

          <input
            type="file"
            id="photo"
            name="photo"
            @change="update_photo"
            style="display:none"
            ref="photoinput"
          />
          <button
            @click="$refs.photoinput.click()"
            class="border-2 border-gray-200 rounded drop-shadow shadow-inner"
          >
            Update Photo
          </button>
          </div>

        <div
          class="flex flex-col border-2 border-blue-400 p-1 w-1/3 h-1/6"
        >
          <input
            type="text"
            v-model="user_name"
            class="text-center rounded-md hover:bg-blue-200 mt-1"
          />
          <hr class="border-t-1 border-b-1 border-dashed mt-2 mb-2">
          <button @click.prevent="update_user" class="bg-gray-200 hover:bg-blue-200 rounded mb-1">
            Update User Name
          </button>
        </div>
      </section>
   
  <section class="flex items-center justify-center flex-col">
    <router-link to="/addstory" class="flex items-center justify-center w-1/6 mt-4 bg-gradient-to-b from-gray-400 transition duration-700 ease-in hover:from-gray-400 hover:to-gray-500 rounded"><h3 class="prose-xl">Add New Story</h3></router-link>
    
    <div>
      <ul class="mt-8 flex flex-col gap-y-12 items-center justify-center">
        <li
          class="flex flex-col items-center justify-center border-4 border-blue-500 w-1/4 gap-x-2 h-auto drop-shadow-2xl ring-4 p-6 rounded-lg bg-gray-200"
          v-for="item in stories"
          :key="item.id"
        >
          <div class="flex flex-row shadow-inner border-b-2 py-1">
            <h2 class="px-2">{{ item.title }}</h2> |
            <h3 class="px-2 transition duration-300 ease-in-out hover:bg-blue-200 rounded-lg"><router-link :to="{ name: 'Profile', params: { id: item.id }}">Edit</router-link></h3>
          </div>
          <div class="flex-1">
            <p class="whitespace-normal p-2 prose-lg">{{ item.text }}</p>
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
  </div>
</template>

<script>
import { getAuth, updateProfile } from "firebase/auth";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import NoProfile from "../components/NoProfile.vue";

const auth = getAuth();

export default {
  name: "MyProfile",
  components: { NoProfile },
  data() {
    return {
      stories: [],
      feed: null,
      user_info: auth.currentUser ? auth.currentUser : [],
      user_name: null,
      profile_photo: null,
      link_display: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.user_name = this.user_info.displayName;
    }, 200);
    this.get_profile_photo();
    this.get_feed();
  },
  methods: {
    get_feed: async function() {
      this.$axios
        .get(`http://localhost:3000/profiles?id=${this.user_info.uid}`)
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
        auth.currentUser.uid + "/profilePicture/profilephoto.jpg"
      );
      getDownloadURL(spaceRef)
        .then((url) => {
          let img = document.getElementById("profile_photo");
          img.setAttribute("src", url);
          this.link_display = false;
        })
        .catch(() => {
          this.link_display = true;
        });
    },
    update_user: function() {
      updateProfile(auth.currentUser, {
        displayName: this.user_name,
      })
        .then(() => {
          console.info("Success");
          console.info(auth.currentUser.displayName);
        })
        .catch((error) => {
          console.warn(error);
        });
    },
    update_photo: function(e) {
      this.profile_photo = e.target.files[0];

      let spaceRef = ref(
        storage,
        auth.currentUser.uid + "/profilePicture/profilephoto.jpg"
      );

      uploadBytes(spaceRef, this.profile_photo)
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");
          console.info(snapshot);
          getDownloadURL(spaceRef).then((url) => {
            const img = document.getElementById("profile_photo");
            img.setAttribute("src", url);
          });
        })
        .catch((error) => {
          console.warn(error);
        });

      console.info("test");
    },
  },
};
</script>

<style></style>
