<template>
  <div class="stepper">
    <div class="stepper__circle stepper__circle--1"><span>1</span></div>
    <span class="stepper__text">寄送地址</span>
    <div class="stepper__line"></div>
    <div class="stepper__circle stepper__circle--2"><span>2</span></div>
    <span class="stepper__text">運送方式</span>
    <div class="stepper__line"></div>
    <div class="stepper__circle stepper__circle--3"><span>3</span></div>
    <span class="stepper__text">付款資訊</span>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "./../assets/scss/variables.scss";

.stepper {
  @include flexCenter;
  justify-content: space-between;

  @include respond($bp-first) {
    grid-column: 1/7;
  }

  &__text {
    display: none;
    font-size: 1.6rem;

    @include themify() {
      color: themed('fc');
    }

    @include respond($bp-second) {
      display: inline-block;
    }
  }

  &__line {
    @include themify() {
      background-color: themed('fc');
    }

    width: 6rem;
    height: 1px;
  }

  &__circle {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    @include themify(){
      border: 1px solid themed('border-color-light');
    }
    @include flexCenter;

    @include respond($bp-first) {
      width: 2.4rem;
      height: 2.4rem;
    }

    span {
      @include themify() {
        color: themed('fc');
      }
    }
  }
}

</style>