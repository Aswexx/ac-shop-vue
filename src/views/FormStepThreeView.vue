<template>
  <form action="" class="form theme-default">
      <FormStepper :currentStep="3"/>

      <div class="form__payment hidden">
        <h2 class="form__title">付款資訊</h2>
        <div class="form-group form__payment--card-name">
          <label for="card-name">持卡人姓名</label>
          <input 
            v-model="paymentInfo.cardName"
            type="text" id="card-name" placeholder="請輸入持卡人姓名">
        </div>
        <div class="form-group form__payment--card-num">
          <label for="card-num">卡號</label>
          <input 
            v-model="paymentInfo.cardNum"
            type="text" id="card-num" placeholder="1111222233334444">
        </div>
        <div class="form-group form__payment--expire">
          <label for="exprie">有效期限</label>
          <input 
            v-model="paymentInfo.validDate"
            type="text" id="exprie" placeholder="MM/YY">
        </div>
        <div class="form-group form__payment--CVC">
          <label for="CVC">CVC/CCV</label>
          <input 
            v-model="paymentInfo.CVC"
            type="text" id="CVC" placeholder="123">
        </div>
      </div>

      <ShopCart/>

      <div class="control">
        <router-link to="/form2" class="btn control--prev">&larr; 上一步</router-link>
        <button
          class="btn control--next"
          @click.stop.prevent="handleSubmit"
        >確認下單</button>
      </div>

  </form>
</template>

<script>
import FormStepper from './../components/FormStepper.vue';
import ShopCart from './../components/ShopCart.vue'

export default {
  data(){
    return {
      paymentInfo: {
        cardName: '',
        cardNum: '',
        validDate: '',
        CVC: '',
      }
    }
  },
  props:['currentStep'],
  methods: {
    handleSubmit(){
      this.$emit('userSubmit',this.paymentInfo)
      this.paymentInfo =""
      this.$router.push({path:"/"})
    }
  },
  components: {
    FormStepper,ShopCart
  },
  mounted(){
    this.paymentInfo = JSON.parse(localStorage.getItem('paymentInfo')) || this.paymentInfo
  },
  beforeDestroy(){
    const userInputs = this.paymentInfo
    localStorage.setItem('paymentInfo',JSON.stringify(userInputs))
  }
}
</script>