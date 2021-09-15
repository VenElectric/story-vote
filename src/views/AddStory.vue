<template>
<div class="flex flex-col justify-center items-center">
<h2 class="flex self-center prose-xl mt-28">Create a new Story</h2>
<input type="text" placeholder="Your Title" class="mt-10">
<form>
  <div>
    <textarea class="mt-10"/>
  </div>
  <div class="flex flex-col mt-5">
    <h3>Voting Options</h3>
    
    <input type="text" placeholder="Voting Question">
    <ul>
      <li v-for="item in options" :key="item.id">
        <input type="text" placeholder="Enter Answer">
      </li>
    </ul>
    
    <button @click.prevent="add_item" class="mt-5 mb-5">Add a new option</button>
    <button>Submit Story</button>
    
  </div>
  </form>

</div>
</template>

<script>
export default {
    name:'AddStory',
    data(){
      return{
        options:[{"1":null}]
      }
    },
    methods:{
      add_item: function(){
        let next = String(this.options.length + 1);
        this.options.push({[next]:null})
      }
    }
    

}
</script>

<style>

</style>