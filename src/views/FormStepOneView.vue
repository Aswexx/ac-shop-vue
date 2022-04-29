<template>
  <form action="" class="form theme-default">

    <FormStepper/>


    <div class="form__address">
      <h2 class="form__title">寄送地址</h2>
        <div class="form-group form__address--salution">
          <label for="salution" class="salution">稱謂</label>
          <select 
            name="" id="salution" required
            v-model="addressInfo.salution"
          >
            <option value="無" selected>無</option>
            <option value="先生">先生</option>
            <option value="小姐">小姐</option>
          </select>
        </div>
        <div class="form-group form__address--name">
          <label for="name" class="name">姓名</label>
          <input 
            type="text" id="name" placeholder="請輸入姓名"
            v-model="addressInfo.customerName"
          >
        </div>

      <div class="form-group form__address--phone">
        <label for="phone" class="phone">電話</label>
        <input 
          type="tel" id="phone" placeholder="請輸入行動電話"
          v-model="addressInfo.tel"
        >
      </div>
      <div class="form-group form__address--email">
        <label for="email" class="email">Email</label>
        <input 
          type="email" id="email" placeholder="請輸入電子郵件"
          v-model="addressInfo.email"
        >
      </div>
      <div class="form-group form__address--city">
        <label for="city" class="city">城市</label>
        <select 
          name="city" id="city" required
          v-model="addressInfo.city"
        >
          <option value="請選擇城市" disabled selected>請選擇城市</option>
          <option value="台北市">台北市</option>
          <option value="台中市">台中市</option>
          <option value="高雄市">高雄市</option>
        </select>
      </div>
      <div class="form-group form__address--address">
        <label for="address">地址</label>
        <input 
          type="text" id="address" placeholder="請輸入地址"
          v-model="addressInfo.address"
        >
      </div>
    </div>

    <ShopCart/>

    <div class="control">
      <router-link to="/" class="btn control--prev">&larr; 上一步</router-link>
      <router-link
        class="btn control--next"
        to="/form2"
      >下一步 &rarr;</router-link>
    </div>
  </form>
</template>

<script>
import FormStepper from './../components/FormStepper.vue'
import ShopCart from './../components/ShopCart.vue'

export default {
  data(){
    return {
      addressInfo: {
        salution: '無',
        customerName: '',
        tel: '',
        email: '',
        city: '請選擇城市',
        address: '',
      }
    }
  },
  props:['deliveryFee'],
  components: {
    FormStepper,ShopCart
  },
  mounted(){
    this.addressInfo = JSON.parse(localStorage.getItem('subsInfo')) || this.addressInfo
  },
  beforeDestroy(){
    const userInputs = this.addressInfo
    localStorage.setItem('subsInfo',JSON.stringify(userInputs))
    this.$emit('leaveFormOne',this.addressInfo)
  }
}
</script>

// <style lang="scss" scoped>
//   @import './../assets/scss/variables.scss';

// .form {
//   width: 95%;
//   margin: 0 auto;
//   border: 1px solid green;

//   @include respond($bp-first) {
//     display: grid;
//     grid-template-columns: repeat(12, 1fr);
//   }

//   @include respond($bp-second) {
//     grid-column-gap: $col-gap;
//   }

//   &__title {
//     grid-column: 1/-1;
//   }

//   &__address {
//     position: relative;

//     &--salution {
//       width: 35%;
//       display: inline-block;
//       @include dropdownIcon;
//     }

//     &--name {
//       display: inline-block;
//       width: 58%;
//       margin-left: auto;
//       position: absolute;
//       right: 0;

//       @include respond($bp-first) {
//         position: static;
//         width: 100%;
//       }
//     }

//     &--city {
//       @include dropdownIcon
//     }

//     //////////////////// 寄送地址 RWD /////////////
//     @include respond($bp-first) {
//       grid-column: 1/7;
//       grid-row: 2/3;

//       display: grid;
//       grid-template-columns: repeat(6, 1fr);
//       grid-column-gap: $col-gap;

//       &--salution {
//         width: 100%;
//         grid-column: 1/3;
//       }

//       &--name {
//         width: 100%;
//         grid-column: 3/-1;
//       }

//       &--phone {
//         grid-column: 1/4;
//       }

//       &--email {
//         grid-column: 4/-1;
//       }

//       &--city {
//         grid-column: 1/3;
//       }

//       &--address {
//         grid-column: 3/-1;
//       }
//     }
//   }
// }

// .btn {
//   display: block;
//   text-align: center;
//   border: none;
//   border-radius: 5px;
//   padding: 1.5rem .5rem;
//   cursor: pointer;
//   width: 50%;
  
//   @include respond($bp-second) {
//     width: 32.463%;
//     max-width: 170px;
//   }

//   background-color: $btn-color-pink;
//   color: white;
// }

// .control {
  
//   padding-top: 2.4rem;
//   display: flex;
//   justify-content: space-between;
//   @include themify() {
//     border-top: 1px solid themed('fc');
//   }

//   @include respond($bp-first) {
//     grid-column: 1/7;
//     grid-row: 3/4;
//     margin-top: auto;
//   }

//   &--prev {
//     transition: all .2s ease-in;
//     @include themify(){
//       background-color: themed('bg');
//       color: themed('fc')
//     }

//     &:hover {
//       background-color: gray;
//     }
//   }

//   &--next {
//     background-color: #f67599;
//     transition: all .2s ease-in;

//     &:hover {
//       background-color: #ff477b;
//     }
//   }
// }



// </style>