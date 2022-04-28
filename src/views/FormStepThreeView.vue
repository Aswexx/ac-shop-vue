<template>
  <div>
    <h1>formThree</h1>
      <FormStepper/>

      <div class="form__payment hidden">
        <h2 class="form__title">付款資訊</h2>
        <div class="form-group form__payment--card-name">
          <label for="card-name">持卡人姓名</label>
          <input 
            v-model="paymentInfo.name"
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

      <div class="control">
        <router-link to="/form2" class="btn control--prev">&larr; 上一步</router-link>
        <button
          class="btn control--next"
          @click.stop.prevent="handleSubmit"
        >確認下單</button>
      </div>

  </div>
</template>

<script>
import FormStepper from './../components/FormStepper.vue';

export default {
  data(){
    return {
      paymentInfo: {
        name: '',
        cardNum: '',
        validDate: '',
        CVC: '',
      }
    }
  },
  methods: {
    handleSubmit(){
      confirm('確定下單?')
      this.$emit('userSubmit',this.paymentInfo)
      this.paymentInfo =""
      this.$router.push({path:"/"})
    }
  },
  components: {
    FormStepper
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