<template>
  <div class="modal">
    <div class="info">
      <p>品項A--VV</p>
      <p>品項A</p>
      <p>{{orderInfo.name}}</p>
      <button @click.stop.prevent="closeModal" class="btn">確定</button>
    </div>

    
  </div>
</template>
<script>
export default {
  props: {
    orderInfo: {
      type: Object,
      require: true
    }
  },
  methods: {
    closeModal(){
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    width: 100%;
    height: 100vh;
    background-color: rgba(gray,.4);
    position: absolute;
    top: 0;
  }

  .info {
    width: 50%;
    height: 30vh;
    margin: 0 auto;
    background-color: green;
    border-radius: 15px;
    position: absolute;
    top: 15%;
    left: 25%;
  }
</style>