<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart (event) {
        if (!event._constructed) {
          return
        }
        if (!this.food.count) {
//  赋值
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
        this.$root.eventHub.$emit('cartadd', event.target)
      },
      decreaseCart (event) {
        if (!event._constructed) {
          return
        }
        if (this.food.count > 0) {
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    display:inline-block
    .cart-decrease, .cart-count, .cart-add
      display: inline-block
      vertical-align: middle
    .cart-decrease
      padding: 6px
      transition: all 0.4s linear
      &.move-enter-active
        opacity: 1
        transform: translate3d(0,0,0)
        .inner
          transform: rotate(0)
      &.move-enter, &.move-leave-active
        opacity: 0
        transform: translate3d(24px,0,0)
        .inner
          transform: rotate(180deg)
      .inner
        display: inline-block
        font-size: 24px
        line-height: 24px
        color: rgb(0,160,220)
        transition: all 0.4s linear
    .cart-add
      padding: 6px
      font-size: 24px
      line-height: 24px
      color: rgb(0,160,220)
    .cart-count
      width: 12px
      line-height: 24px
      font-size: 10px
      height: 24px
      color: rgb(147,153,159)
      text-align: center
</style>
