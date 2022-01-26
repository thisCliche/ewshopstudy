<template>
  <div class="home">
      {{banner}}
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import {getHomeAllData, getBanner} from "network/home";

export default {
  name: 'Home',

  setup(){
      const banner = ref([]);

      onMounted(()=>{
        getHomeAllData().then(res=>{

              banner.value = res.slides;


        }).catch(err=>{

        })

      })

      return {
        banner
      }
  },

  components: {

  }
}
</script>

<style>
  #demo {
    background:url('~assets/images/3.png') no-repeat;
    width:100px;
    height:100px;
  }
  .demo1 {
    color:var(--color-high-text)
  }
</style>
