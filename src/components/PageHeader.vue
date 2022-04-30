<template>

  <header class="header">
    
    <div class="nav-trigger" @click='toggleNav'>
      <span class="nav-trigger-icon">&nbsp;</span> 
    </div>
    <div class="logo">
      <img v-if="!isDarkMode" src="./../assets/image/logo@2x.png" alt="logo" class="logo">
      <img v-else src="./../assets/image/logo-dark@2x.png" alt="logo" class="logo">
    </div>
    
    <transition name="fade">
      <nav class="nav" v-show="width > 375 || isTriggered">
        <a href="#">男款</a>
        <a href="#">女款</a>
        <a href="#">最新消息</a>
        <a href="#">客製商品</a>
        <a href="#">聯絡我們</a>
      </nav>

    </transition>

    <transition name="fade">
      <div class="features" v-show="width > 375 || isTriggered">
        <svg><use href="./../assets/image/magnifying-glass-solid.svg#magnify"></use></svg>
        <svg><use href="./../assets/image/cart-plus-solid.svg#cart"></use></svg>
        <svg v-if="isDarkMode" @click='switchTheme'><use href="./../assets/image/sun-regular.svg#sun"></use></svg>
        <svg v-else @click='switchTheme'><use href="./../assets/image/moon-regular.svg#moon"></use></svg>
      </div>
    </transition>


  </header>
</template>
<script>
export default {
  data(){
    return {
      isTriggered: false,
      width: document.documentElement.clientWidth,
      isDarkMode: false,
    }
  },
  methods: {
    toggleNav(){
      this.isTriggered = !this.isTriggered
    },
    getWidth() {
      this.width = document.documentElement.clientWidth;
    },
    switchTheme(){
      this.isDarkMode = !this.isDarkMode
      this.$emit('switchDisplayMode')
    }
  },
  mounted() {
    window.addEventListener('resize', this.getWidth);
  },
  unmounted() {
    window.removeEventListener('resize', this.getWidth);
  },
}
</script>


<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";

header {
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 10% 80%;
  justify-items: center;

  position: fixed;
  left: 2.5%;
  right: 2.5%;
  top: 1.5%;
  z-index: 199;
  @include themify(){
    background-color: themed('bg');
  }

  @include respond($bp-first){
    max-width: 1110px;
    grid-template-columns: repeat(12,1fr);
    grid-gap: $col-gap;
    align-items: center;
  }
}

.nav-trigger {
  cursor: pointer;
  width: 30px;
  
  @include respond($bp-first){
    display: none;
  }
}

.logo {
  @include respond($bp-first){
    grid-column: 1/6;
    grid-row: 1/2;
  }
  @include respond($bp-second){
    grid-column: 6/9;
  }
}

.nav {
  grid-column: 2/-1;
  grid-row: 2/3;

  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;

  a {
    display: block;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
    font-weight: bold;
    text-align: center;
    transition: color .2s ease-in;

    &:hover {
      @include themify(){
        color: themed('fc-light')
      }
    }
  }
  @include respond($bp-first){
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    grid-column: 1/-1;
    grid-row: 2/3;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  @include respond($bp-second){
    grid-column: 1/6;
    grid-row: 1/2;
  }
}

.features {
  grid-column: 2/-1;
  grid-row: 3/4;

  @include respond($bp-first){
    grid-column: 10/-1;
    grid-column: 8/-1;
    grid-row: 1/2;
    justify-self: end;
  }

  svg {
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    transition: fill .2s ease-in;
    &:nth-of-type(2n){
      margin: 0 4rem;
    }
    
    @include themify(){
      fill: themed('fc');
    }
    &:hover {
      @include themify(){
        fill: themed('fc-light');
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>