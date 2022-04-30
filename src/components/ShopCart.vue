<template>

  <div class="shop-cart">
      <h3 class="shop-cart__title">購物籃</h3>

      <div
        class="shop-cart__item" 

        v-for="product in products"
        :key='product.id'>

        <img 
          :src="product.src" 
          
          alt="product" class="shop-cart__product-img">
        <span class="shop-cart__product-title">
          {{product.title}}
          </span>
        <div class="shop-cart__product-counter">
          <div class="counter-btn minus"
            @click="decrease(product.id)"
          >-</div>
          <span class="quantity">
            {{product.quantity}}
            </span>
          <div class="counter-btn plus"
            @click="increase(product.id)"
          >+</div>
        </div>
        <div class="shop-cart__item-price">
          {{ product.quantity*product.price | thousandth}}
          </div>
      </div>


<!------------------------------------------------ ---------------------------------->
<!----------------------------------------------------------------------------------->
      
      <div class="shop-cart__amount">
        <div class="">
          <span class="shop-cart__amount-text">運費</span>
          <span class="shop-cart__delivery-fee">{{deliveryFee | thousandth}}</span>
        </div>
        <div class="">
          <span class="shop-cart__amount-text">小計</span>
          <span class="shop-cart__total">{{totalPirce | thousandth}}</span>
        </div>
      </div>
    </div>

</template>
<script>
const dummyData = {
  products: [
  {
    id: '1',
    title: '破壞補丁修身牛仔褲',
    src: require('./../assets/image/product-1@2x.png'),
    price: 1299,
    quantity: 1,
  },
  {
    id: '2',
    title: '刷色直筒牛仔褲',
    src: require('./../assets/image/product-2@2x.png'),
    price: 3999,
    quantity: 1,
  }]
}


export default {
  data(){
    return {
      products: [],
      deliveryFee: '',
    }
  },
  methods: {
    increase(id){
      this.products.find(product => product.id === id)
      .quantity++
    },
    decrease(id){
      const item = 
      this.products.find(product => product.id === id)
      
      if (item.quantity === 1) return
      item.quantity--
    },
    getDeliveryFee(data){
      this.deliveryFee = data
    },
    reset(){
      this.products.forEach(e => {
        e.quantity = 1
      })
    }
  },
  computed: {
    totalPirce(){
      let sum = 0
      this.products.forEach(e => {
        sum += e.quantity * e.price
      })

      if (isNaN(Number(this.deliveryFee))){
        return sum
      }
      return sum + Number(this.deliveryFee)
      
    }
  },
  filters: {
    thousandth(num){
      if (isNaN(Number(num))){
        return num
      }
      return `$${num.toLocaleString()}`
    }
  },
  created(){
    this.products = dummyData.products
  },
  mounted(){
    this.$bus.$on('passDeliveryFee',this.getDeliveryFee)
    this.$bus.$on('afterCheck',this.reset)
  },
  updated(){
    this.$bus.$emit('handleTotalPrice',this.totalPirce)
  },
  beforeDestroy(){
    this.$bus.$off('passDeliveryFee',this.getDeliveryFee)
    this.$bus.$off('afterCheck',this.reset)
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";

.shop-cart {
  @include themify(){
    color: themed('fc')
  }

  @include respond($bp-first) {
    grid-column: 8/-1;
    grid-row: 1/4;
    @include themify(){
      border: 1px solid themed('border-color-light')
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
    
    @include respond($bp-first){
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.2rem;
    }


    @include respond($bp-second){
      display: grid;
      margin: 3.4rem 0;
      grid-template-columns: 12rem 1fr min-content;
      grid-auto-rows: min-content;
      font-size: 1.2rem;
    }

    @include respond($bp-third){
      font-size: 1.6rem;
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
        background-color: themed('btn-color-gray')
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
        border-top: 1px solid themed('border-color-light');
      }
      padding: 1.6rem 0;
    }
  }
}
</style>