<template>
   <footer class="footer theme-default">
      <div class="footer-wrapper">
        
      <img v-if="!isDarkMode" src="./../assets/image/logo@2x.png" alt="logo" class="logo">
      <img v-else src="./../assets/image/logo-dark@2x.png" alt="logo" class="logo">
      
      <ul class="footer__list"><strong>客戶服務</strong>
        <li><a href="#">運送說明</a></li>
        <li><a href="#">退換貨相關</a></li>
        <li><a href="#">付款資訊</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>

      <ul class="footer__list"><strong>關於我們</strong>
        <li><a href="#">品牌故事</a></li>
        <li><a href="#">媒體聯繫</a></li>
        <li><a href="#">Press kit</a></li>
      </ul>

      <ul class="footer__list"><strong>資訊</strong>
        <li><a href="#">隱私權政策</a></li>
        <li><a href="#">Cookie</a></li>
        <li><a href="#">GDPR</a></li>
      </ul>

      <ul class="footer__list"><strong>追蹤 Alpha Camp</strong>
        <li><a href="#">+886 02123-45678</a></li>
        <li>
          <svg><use href="./../assets/image/facebook-f-brands.svg#fb"></use></svg>
          <svg><use href="./../assets/image/instagram-brands.svg#ig"></use></svg>
          <svg><use href="./../assets/image/phone-solid.svg#phone"></use></svg>
        </li>
      </ul>
      </div>
    </footer>
</template>

<script>
export default {
  props:['isDarkMode']
}
</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";

.footer {
  display: none;
  @include respond($bp-first){
    display: block;
    @include themify(){
      background-color: themed('bg-secondary');
    }
    
    &-wrapper {
      max-width: 1110px;
      margin: 0 auto;
      padding-top: 1rem;

      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-gap: 1rem;


      img {
        display: none;
      }

      ul {
        font-size: 2.4rem;
        @include themify(){
          color: themed('fc');
        }
      }

      li {
        font-size: 1.6rem;
        padding-top: .5rem;
      
        &:first-child {
          padding-top: 1rem;
        }
      
        a {
          @include themify(){
            color: themed('fc');
          }
          border-bottom: none;
          transition: color .1s ease-in;
          
          &:hover {
            @include themify(){
              color: themed('fc-light');
            }
          }
        }
      
        svg {
          cursor: pointer;
          width: 1.6rem;
          height: 1.6rem;
          margin: 0 1.2rem 0 0;
          transition: fill .2s ease-in;
          
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
    
      @include respond($bp-second){
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6.4rem 0 10.5rem 0;

        img {
          display: block;
          align-self: center;
        }
      
        ul {
          font-size: 2.4rem;
          align-self: flex-start;
        }
      }
    }
  }

  @include respond($bp-second){
    margin-top: 12rem;
  }
}
</style>