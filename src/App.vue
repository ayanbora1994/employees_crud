<template>
  <div id="app">
    <screen-loader v-if="loading" />
    <navbar />
    <router-view class="container" />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import ScreenLoader from '@/components/ScreenLoader'
import {mapState} from 'vuex'

export default {
  components: {
    Navbar,
    ScreenLoader
  },  
  computed: {
    ...mapState(['loading'])
  }
}
</script>


<style>

  body {
    background-color: #fafafa;
  }

  .fill {
    position: absolute;
    left:0;
    top:0;
    z-index: 1;
    width: 100%;
    height: 100vh;    
  }

  .screenLoaderWrapper {
    background-color: white;    
    opacity: 0.7
  }

  nav {
    margin-bottom: 15px;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }  
  .dead-center {
    justify-content: center;
    align-items: center;
  }
  .align-items-center {
    align-items: center;
  }
  .justify-content-center {
    justify-content: center;
  }
  .space-between {
    justify-content: space-between;
  }  
</style>
