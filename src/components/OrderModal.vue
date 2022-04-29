<template>
  <div class="modal">
    <div class="info">
      <h1>訂單資訊</h1>
      <p>姓名: {{orderInfo.customerName}}</p>
      <p>稱謂: {{orderInfo.salution}}</p>
      <p>連絡電話: {{orderInfo.tel}}</p>
      <p>Email: {{orderInfo.email}}</p>
      <p>縣市: {{orderInfo.city}}</p>
      <p>地址: {{orderInfo.address}}</p>
      <p>運費: {{orderInfo.fee}}</p>
      <p>持卡人姓名: {{orderInfo.cardName}}</p>
      <p>信用卡號: {{orderInfo.cardNumber}}</p>
      <p>有效期限: {{orderInfo.validDate}}</p>
      <p>CVC/CCV: {{orderInfo.CVC}}</p>
      <p>訂單總金額: {{totalPrize}}</p>

      <button @click.stop.prevent="closeModal" class="btn">確定</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      totalPrize: 0
    }
  },
  props: {
    orderInfo: {
      type: Object,
      require: true
    },
  },
  methods: {
    closeModal(){
      this.$emit('closeModal')
      this.totalPrize = 0
      this.$bus.$emit('afterCheck')
    },
    saveTotalPrice(num){
      this.totalPrize = num
    }
  },
  mounted(){
    this.$bus.$on('handleTotalPrice',this.saveTotalPrice)
  },
}
</script>

<style lang="scss" scoped>
  .modal {
    width: 100%;
    height: 110%;
    background-color: rgba(gray,.4);
    position: absolute;
    top: 0;
    z-index: 999;
  }

  .info {
    width: 50%;
    height: 50vh;
    margin: 0 auto;
    background-color: white;
    border-radius: 15px;
    position: absolute;
    top: 15%;
    left: 25%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    p {
      align-self: flex-start;
      padding-left: 3rem;
    }
  }
</style>