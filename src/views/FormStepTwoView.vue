<template>
  <form action="" class="form theme-default">
      <FormStepper :currentStep="2"/>
      
      <div class="form__delivery">
        <h2 class="form__title">運送方式</h2>

        <label 
          @click="updateDeliveryFee()"

          class="form-group form__delivery--normal" for="normal">
          <input 
            v-model="deliveryInfo.fee"
            type="radio" id="normal" name="delivery" value="免費">
          <span>標準運送</span>
          <span>約3~7個工作天</span>
          <span>免費</span>
        </label>

        <label 
          @click="updateDeliveryFee()"
          
          class="form-group form__delivery--DHL" for="DHL">
          <input 
            v-model="deliveryInfo.fee"
            type="radio" id="DHL" name="delivery" value="500">
          <span>DHL貨運</span>
          <span>48小時內送達</span>
          <span>$500</span>
        </label>
      </div>

      <ShopCart/>

      <div class="control">
        <router-link to="/" class="btn control--prev">&larr; 上一步</router-link>
        <router-link
          class="btn control--next"
          to="/form3"
        >下一步 &rarr;</router-link>
      </div>

  </form>
</template>

<script>
import FormStepper from './../components/FormStepper.vue';
import ShopCart from './../components/ShopCart.vue'

export default {
  data(){
    return {
      deliveryInfo: {
        fee: '免費'
      }
    }
  },
  props:['currentStep'],
  components: {
    FormStepper,ShopCart
  },
  methods: {
    updateDeliveryFee(){
      this.$emit('leaveFormTwo',this.deliveryInfo)
    },
    reset(){
      this.deliveryInfo.fee = '免費'
    }
  },
  mounted(){
    this.deliveryInfo = JSON.parse(localStorage.getItem('deliveryInfo')) || this.deliveryInfo
    this.$bus.$on('afterCheck',this.reset)
  },
  beforeDestroy(){
    const userInputs = this.deliveryInfo
    localStorage.setItem('deliveryInfo',JSON.stringify(userInputs))
    this.$emit('leaveFormTwo',this.deliveryInfo)
    this.$emit('updateStep')
    
    this.$bus.$off('afterCheck',this.reset)
  }
}
</script>