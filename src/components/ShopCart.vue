<template>

  <div class="shop-cart">
      <h3 class="shop-cart__title">購物籃</h3>
      <div class="shop-cart__item" data-id="1">
        <img src="./../assets/image/product-1@2x.png" alt="product" class="shop-cart__product-img">
        <span class="shop-cart__product-title">破壞補丁修身牛仔褲</span>
        <div class="shop-cart__product-counter">
          <div class="counter-btn minus">-</div>
          <span class="quantity">1</span>
          <div class="counter-btn plus">+</div>
        </div>
        <div class="shop-cart__item-price">$1,299</div>
      </div>
      <div class="shop-cart__item" data-id="2">
        <img src="./../assets/image/product-2@2x.png" alt="product" class="shop-cart__product-img">
        <span class="shop-cart__product-title">刷色直筒牛仔褲</span>
        <div class="shop-cart__product-counter">
          <div class="counter-btn minus">-</div>
          <span class="quantity">1</span>
          <div class="counter-btn plus">+</div>
        </div>
        <div class="shop-cart__item-price">$3,999</div>
      </div>
<!------------------------------------------------ ---------------------------------->
<!----------------------------------------------------------------------------------->
      
      <div class="shop-cart__amount">
        <div class="form-row-spacebetween">
          <span class="shop-cart__amount-text">運費</span>
          <span class="shop-cart__delivery-fee">免費</span>
        </div>
        <div class="form-row-spacebetween">
          <span class="shop-cart__amount-text">小計</span>
          <span class="shop-cart__total">$3,998</span>
        </div>
      </div>
    </div>

</template>


<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";

.shop-cart {
  @include respond($bp-first) {
    grid-column: 7/-1;
    grid-row: 1/4;
    @include themify(){
      border: 1px solid themed('fc')
    }
    border-radius: 5px;
    padding: 3.5rem 1.6rem 0 1.6rem;
  }

  &__title {
    font-size: 1.8rem;
    display: none;
    @include respond($bp-first){
      display: block;
    }
  }

  &__item {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(3,min-content);
    grid-row-gap: 1.6rem;
    margin: 1rem 0;

    font-size: 1.6rem;
    
    @include respond($bp-first){
      margin: 3.4rem 0;
      grid-template-columns: 12rem 1fr min-content;
      grid-auto-rows: min-content;
    }

    .quantity {
      font-size: 1.4rem;
    }

    img {
      display: block;
      width: 10rem;
      height: 10rem;
      grid-row: 1/4;
    }
  }

  &__product-title,
  &__product-counter,
  &__item-price {
    justify-self: end;
    @include respond ($bp-first){
      justify-self: start;
    }
  }

  &__product-title {
    @include respond ($bp-first) {
      grid-column: 2/3;
    }
  }

  &__item-price {
    @include respond($bp-second){
      grid-column: 3/4;
      grid-row: 1/2;
    }
  }

  &__product-counter {
    width: 11rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .counter-btn {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
      text-align: center;
      cursor: pointer;

      @include themify(){
        background-color: themed('fc')
      }

      &:hover {
        @include themify(){
          background-color: themed('fc-light')
        }
      }
    }

    @include respond($bp-first){
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }

  &__amount {
    font-size: 1.4rem;
    div {
      display: flex;
      justify-content: space-between;
      @include themify(){
        border-top: 1px solid themed('border-color-main');
      }
      padding: 1.6rem 0;
    }

    &-text {
      @include themify(){
        color: themed('fc-light')
      }
    }
  }
}
</style>