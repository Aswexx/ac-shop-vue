<template>

<div :class="isDarkMode ? 'theme-dark' : 'theme-default'">
  <div id="app">
    <PageHeader
      @switchDisplayMode='switchDisplayMode'
    />

    <br>

      <router-view
        @leaveFormOne='saveAddressInfo'
        @leaveFormTwo='saveDeliveryInfo'
        @userSubmit='handleSubmitData'
      />
    <PageFooter
      :isDarkMode='isDarkMode'
    />

    <OrderModal 
      :orderInfo="orderInfo"
      @closeModal="closeModal"
      v-show="modalAppear"/>
  </div>

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
      isDarkMode: false,
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
    switchDisplayMode(){
      this.isDarkMode = !this.isDarkMode
    },
    closeModal(){
      this.modalAppear = false
      window.location.reload()
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

#app {
  @include themify(){
    background-color: themed('bg');
  }
}

</style>
