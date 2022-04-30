<template>
  <div class="stepper">
    <div class="stepper__circle stepper__circle--1" :class="{active: currentStep <= 3}"><span>1</span></div>
    <span class="stepper__text" :class="{active: currentStep <= 3}">寄送地址</span>
    <div class="stepper__line" :class="{active: currentStep >= 2}"></div>
    <div class="stepper__circle stepper__circle--2" :class="{active: currentStep >= 2}"><span>2</span></div>
    <span class="stepper__text" :class="{active: currentStep >= 2}">運送方式</span>
    <div class="stepper__line" :class="{active: currentStep === 3}"></div>
    <div class="stepper__circle stepper__circle--3" :class="{active: currentStep === 3}"><span>3</span></div>
    <span class="stepper__text" :class="{active: currentStep === 3}">付款資訊</span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: true,
    }
  },
  props:['currentStep'],
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
      color: rgba(themed('fc-light'),.3);
    }

    @include respond($bp-third) {
      display: inline-block;
    }
  }

  &__line {
    @include themify() {
      background-color: rgba(themed('fc-light'),.3);
    }

    width: 6rem;
    height: 1px;
  }

  &__circle {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    @include themify(){
      border: 1px solid rgba(themed('fc-light'),.3);
    }
    @include flexCenter;

    @include respond($bp-first) {
      width: 2.4rem;
      height: 2.4rem;
    }

    span {
      @include themify() {
        color: rgba(themed('fc-light'),.3);
      }
    }
  }
}

div.active {
  @include themify(){
    border: 1px solid themed('step-active');
  }
  span {
    @include themify(){
      color: themed('step-active');
    }
  }
}

span.active {
  @include themify(){
    color: themed('step-active');
  }
}
</style>