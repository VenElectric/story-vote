<template>
   <div>
      <h1>Your Feed</h1>
      <ul class="mt-8 flex flex-col items-center justify-center gap-y-12">
        <li class="bg-gray-200 flex flex-col items-center justify-center border-4 border-blue-500 w-1/4 gap-x-2 h-auto drop-shadow-2xl ring-4 p-6 rounded-lg" v-for="item in feed" :key="item.id">
        
        <div class="flex flex-row shadow-inner border-b-2 py-1">
          <h3 class="px-2">{{ item.title }}</h3> |
          <h3 class="px-2 transition duration-300 ease-in-out hover:bg-blue-200 rounded-lg"><router-link :to="{ name: 'Profile', params: { id: item.id }}">{{ item.author }}</router-link></h3>
        </div>
        <div class="flex-1">
          <p class="whitespace-normal p-2">{{ item.blurb }}</p>
          <button class="border-2 mb-0 mt-1 rounded-lg p-1 transition duration-300 ease-in-out border-blue-400 hover:bg-blue-200 hover:ring-4">Continue Reading...</button>
        </div>
        
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
      id: '1',author:'Triton',title:"Treatise of the Sea",blurb:'Ad labore culpa reprehenderit esse. Lorem dolore Lorem deserunt ea dolor laborum pariatur culpa occaecat excepteur incididunt. Elit incididunt est deserunt ea. Eu adipisicing incididunt irure ea aliqua ipsum enim aliqua deserunt mollit cupidatat. In adipisicing ullamco irure labore do id aliqua.'
    },
    {
      id: '2',author:'Kylie Sonique',title:"In time, we rise",blurb:'Ea duis ea pariatur laborum nisi tempor voluptate labore dolor sit aute labore ea do. Sunt veniam aliquip consectetur consectetur. Adipisicing aliquip incididunt aute deserunt nostrud aute nulla magna do velit aute sunt veniam. Eiusmod sunt elit Lorem aliqua laboris duis irure tempor velit adipisicing. Reprehenderit dolor ad nisi incididunt officia laborum aute proident irure pariatur amet. Anim dolor commodo officia laboris deserunt cupidatat.'
    },
    {
      id: '3',author:'Strahd von Zarovich',title:"I Am The Land",blurb:'Consequat est deserunt ad laboris qui sunt fugiat sunt. Enim ad et incididunt pariatur aliquip labore ea consectetur eu ullamco aliquip cupidatat. Aliqua mollit dolor dolore dolor laboris incididunt in nulla aliquip. Nostrud sunt irure laborum et mollit ullamco. Lorem ea proident culpa adipisicing. Exercitation sunt nisi cillum laboris. Consequat Lorem irure amet culpa cupidatat consectetur velit sint eu est ut adipisicing exercitation.'
    },
    {
      id: '4',author:'Agatha Harkness',title:"It was me all alonge",blurb:'Aliqua aliquip fugiat Lorem consequat tempor laboris consequat consequat ipsum anim ipsum mollit cillum incididunt. Cillum deserunt laborum in pariatur minim adipisicing deserunt aliqua irure ullamco commodo dolor. Aliquip deserunt eu minim occaecat tempor qui consectetur nostrud sit laborum consequat labore consectetur.'
    }]
    }
  },
}
</script>

<style>

</style>