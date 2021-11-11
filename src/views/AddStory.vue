<template>
  <div class="flex flex-col items-center justify-center mt-28">
    
      <h2 class="prose-xl mt-5 ring-red-300 rounded ring-4 p-2 bg-white text-black">
        Create a new Story
      </h2>
      <form class="w-1/3 rounded-lg flex flex-col items-center justify-center bg-yellow-200 drop-shadow-lg text-white mt-4" @submit.prevent="submit_story">
      <input
        type="text"
        placeholder="Your Title"
        class="mt-10 prose-xl text-center rounded-lg ring-4 ring-green-400 bg-white focus:ring-green-400 focus-within:ring-green-400 text-black placeholder-black"
      />
      
        <textarea
          class="mt-10 prose ring-4 ring-green-400 bg-purple-200 focus:ring-green-400 focus-within:ring-green-400 w-full h-96 object-contain"
        />

        <div class="flex flex-col mt-5">
          <div class="flex place-self-center">
            <h2 class="prose-lg bg-gradient-to-b from-gray-400 rounded p-2 bg-yellow-400 bg-blend-difference">
              Voting Options
            </h2>
          </div>

          <input
            type="text"
            placeholder="Edit Voting Question"
            class="prose-lg mt-5 mb-5 rounded-sm flex place-self-center text-center bg-black text-white"
          />
          <ul class="flex flex-col gap-4 items-center justify-center bg-blend-screen">
            <li v-for="item in options" :key="item.id" class="flex space-y-2">
              <input
                type="text"
                placeholder="Enter Answer"
                class="rounded-sm text-center bg-red-200 text-black"
              />
            </li>
          </ul>

          <button
            @click.prevent="add_item"
            class="mt-5 mb-5 rounded bg-gradient-to-b from-gray-400 w-auto flex place-self-center p-2 text-center bg-blue-400"
          >
            Add a new option
          </button>
          <button
            type="submit"
            class="mb-5 rounded w-auto flex place-self-center p-2 text-center bg-black text-white bg-blend-soft-light"
          >
            Submit Story
          </button>
        </div>
      </form>
    </div>
</template>

<script>
const { v4: uuidv4 } = require("uuid");
// return to myprofile once story is submitted
// red, yellow green
export default {
  name: "AddStory",
  data() {
    return {
      options: [{ "1": null }],
      user_info: "o2n7eMRtxRf4ng1BaMkD2hECdXD2"
    };
  },
  methods: {
    add_item: function() {
      let next = String(this.options.length + 1);

this.options.push({ [next]: null });
    },
    submit_story: function(e) {

      let elements = []

      for (let item of e.target.elements){
        elements.push(item.value)
      }
      let story_id = uuidv4()
      let new_stories = {
         "id": story_id,
      "author": "Andrew Kent",
      "text": "Laborum labore id deserunt dolor enim dolore est culpa.\n Minim non magna et cillum duis nisi sunt.\n Deserunt sit et deserunt pariatur elit aliqua labore voluptate anim.\n  Tempor mollit do exercitation officia occaecat pariatur adipisicing.\nLaboris in eiusmod ad quis ut adipisicing velit culpa ullamco.\nEiusmod ut occaecat consectetur anim labore consequat consectetur proident id id occaecat sit.",
      "title": "My New Story"
      }

      this.$axios.patch(`http://localhost:3000/profiles/o2n7eMRtxRf4ng1BaMkD2hECdXD2/stories`,new_stories,{headers:{"Content-Type": "application/json"}}).then(res => {
          console.log(res)
        }).catch(error => {
        console.warn(error)
      })
     
      // let new_stories;
      // this.$axios.get(`http://localhost:3000/profiles/o2n7eMRtxRf4ng1BaMkD2hECdXD2`).then(data => {
      //   new_stories = [...data.data.stories]
      //   console.info(typeof(new_stories))
      //   new_stories.push({"id":story_id})
      //   console.log(data.data.stories)
      //   this.$axios.patch(`http://localhost:3000/profiles/o2n7eMRtxRf4ng1BaMkD2hECdXD2`,{stories:[...new_stories]},{headers:{"Content-Type": "application/json"}}).then(res => {
      //     console.log(res)
      //   })
      // }).catch(error => {
      //   console.warn(error)
      // })
      // console.log(elements.slice(2,-2))
      
    }
  },
};
</script>

<style></style>
