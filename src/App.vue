<template>
  <div id="app">
    <PageHeader/>

    <br>
    <br>

      <router-view
        @leaveFormOne='saveAddressInfo'
        @leaveFormTwo='saveDeliveryInfo'
        @userSubmit='handleSubmitData'
      />
    <PageFooter/>

    <OrderModal 
      :orderInfo="orderInfo"
      @closeModal="modalAppear=false"
      v-show="modalAppear"/>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import OrderModal from './components/OrderModal.vue'

export default {
  data(){
    return {
      addressInfo: '',
      deliveryInfo: {
        fee: '免費'
      },
      paymentInfo: '',
      modalAppear: false,
      currentStep: 1,
    }
  },
  methods: {
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
    OrderModal,
  },
  mounted(){
    this.$bus.$emit('passDeliveryFee',this.deliveryInfo.fee)
  },
  updated(){
    this.$bus.$emit('passDeliveryFee',this.deliveryInfo.fee)
  }
}
</script>

<style lang="scss">
@import './assets/scss/base.scss';

</style>
