<template>

<div :class="isDarkMode ? 'theme-dark' : 'theme-default'">

  <form action="" class="form">
    <FormStepper :currentStep='1'/>

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
      <router-link
        class="btn control--next"
        to="/form2"
      >下一步 &rarr;</router-link>
    </div>
  </form>

</div>
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
      },
      isDarkMode: false
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
    this.$emit('stepChange')
  }
}
</script>

<style lang="scss" scoped>
  a.btn {
    margin-left: auto;
  }
</style>