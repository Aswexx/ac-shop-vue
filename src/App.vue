<template>
  <div id="app">
      <PageHeader/>
      <form 
        action="" 
        class="form theme-default"
      >

        <router-view
          @passData='showData'
          @leaveFormOne='saveAddressInfo'
          @leaveFormTwo='saveDeliveryInfo'
          @userSubmit='handleSubmitData'
        />
        <ShopCart/>
      </form>
      <OrderModal 
        :orderInfo="orderInfo"
        @closeModal="modalAppear=false"
        v-show="modalAppear"/>
      
      <PageFooter/>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import ShopCart from './components/ShopCart.vue'
import OrderModal from './components/OrderModal.vue'

export default {
  data(){
    return {
      addressInfo: '',
      deliveryInfo: '',
      paymentInfo: '',
      modalAppear: false
    }
  },
  methods: {
    showData(data){
      this.receiveName = data
      console.log('收到: '+ this.receiveName)
    },
    saveAddressInfo(data){
      this.addressInfo = data
    },
    saveDeliveryInfo(data){
      this.deliveryInfo = data
    },
    handleSubmitData(data){
      this.paymentInfo = data

      const allInfo = {
        ...this.addressInfo,
        ...this.deliveryInfo,
        ...this.paymentInfo
      }
      const formData = new FormData()
      Object.entries(allInfo).forEach(([key, value]) => {
          formData.append(key, value);
      });

      for (let [name,value] of formData.entries()){
        console.log(name + ":" + value)
      }

      this.modalAppear = true
      localStorage.clear()
      
    },
  },
  computed: {
    orderInfo(){
      return {
        ...this.addressInfo,
        ...this.deliveryInfo,
        ...this.paymentInfo
      }
    }
  },
  components: {
    PageHeader,
    PageFooter,
    ShopCart,
    OrderModal,
  }
}
</script>

<style lang="scss">
@import './assets/scss/base.scss';

.form {
  width: 95%;
  max-width: 1110px;
  margin: 0 auto;
  border: 1px solid green;

  @include respond($bp-first) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  @include respond($bp-second) {
    grid-column-gap: $col-gap;
  }

  div:first-child {
    grid-column: 1/7;
  }// to match router-view container

  &__title {
    grid-column: 1/-1;
  }

  &__address {
    position: relative;

    &--salution {
      width: 35%;
      display: inline-block;
      @include dropdownIcon;
    }

    &--name {
      display: inline-block;
      width: 58%;
      margin-left: auto;
      position: absolute;
      right: 0;

      @include respond($bp-first) {
        position: static;
        width: 100%;
      }
    }

    &--city {
      @include dropdownIcon
    }

    //////////////////// 寄送地址 RWD /////////////
    @include respond($bp-first) {
      grid-column: 1/7;
      grid-row: 2/3;

      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-column-gap: $col-gap;

      &--salution {
        width: 100%;
        grid-column: 1/3;
      }

      &--name {
        width: 100%;
        grid-column: 3/-1;
      }

      &--phone {
        grid-column: 1/4;
      }

      &--email {
        grid-column: 4/-1;
      }

      &--city {
        grid-column: 1/3;
      }

      &--address {
        grid-column: 3/-1;
      }
    }
  }


  &__delivery {
    @include respond($bp-first){
      grid-column: 1/7;
      grid-row: 2/3;
      z-index: 99;
    }

    .form-group {
      cursor: pointer;
      display: grid;
      padding: 1.2rem 2rem;
      grid-template-columns: 3rem repeat(4,1fr);
      grid-column-gap: 2rem;

      input {
        grid-row: 1/3;
        align-self: center;
      }

      span {
        padding: 2px 0;
        color: gray;
        font-size: 1.4rem;
      }
      span:nth-of-type(1n) {
        grid-column: 2/4;
      }

      span:nth-of-type(2n){
        grid-column: 2/-1;
      }
      span:nth-of-type(3n) {
        grid-column: 4/-1;
        grid-row: 1/2;
        justify-self: end;
      }
    }
  }


  &__payment {
    grid-column: 1/7;
    grid-row: 2/3;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: $col-gap;
    z-index: 199;

    &--card-name {
      grid-column: 1/5;
    }

    &--card-num {
      grid-column: 1/5;
    }

    &--expire {
      grid-column: 1/4;
    }
    &--CVC {
      grid-column: 4/-1;
    }
  }
}

.btn {
  display: block;
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 1.5rem .5rem;
  cursor: pointer;
  width: 50%;
  
  @include respond($bp-second) {
    width: 32.463%;
    max-width: 170px;
  }

  background-color: $btn-color-pink;
  color: white;
}

.control {
  padding-top: 2.4rem;
  display: flex;
  justify-content: space-between;
  @include themify() {
    border-top: 1px solid themed('fc');
  }

  @include respond($bp-first) {
    grid-column: 1/7;
    grid-row: 3/4;
    margin-top: auto;
  }

  &--prev {
    transition: all .2s ease-in;
    @include themify(){
      background-color: themed('bg');
      color: themed('fc')
    }

    &:hover {
      background-color: gray;
    }
  }

  &--next {
    background-color: #f67599;
    transition: all .2s ease-in;

    &:hover {
      background-color: #ff477b;
    }
  }
}

[type="radio"] {
  width: 2.2rem;
  height: 2.2rem;
  margin: 0;
  appearance: none;
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    @include themify(){
      box-shadow: inset 0 0 0 6px themed('btn-color-gray');
    }
  }

  &:focus {
    @include themify(){
      box-shadow: inset 0 0 0 6px themed('btn-color-gray');
    }
  }
}

</style>
