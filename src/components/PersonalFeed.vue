<template>
   <div>
      <h1>Your Feed</h1>
      <ul>
        <li v-for="item in feed" :key="item.id">
          <h2>{{ item.title }}</h2>
          <h3>{{ item.author }}</h3>
          <p>{{ item.blurb }}</p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'PersonalFeed',
  data () {
    return {
      feed: [{
      id: '1',author:'Patrick Star',title:"The boy that never was",blurb:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
    },
    {
      id: '2',author:'Kylie Sonique',title:"In time, we rise",blurb:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
    },
    {
      id: '3',author:'Augustus Caesar',title:"My life's folly",blurb:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
    },
    {
      id: '4',author:'Buzz Lightyear',title:"Story of the toys",blurb:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
    }]
    }
  },
}
</script>

<style>

</style>