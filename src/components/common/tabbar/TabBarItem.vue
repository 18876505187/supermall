<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      },
    },
    data() {
      return {

      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      },
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;/*给上面每个栏目做一个均等分*/
    text-align: center;
    height: 49px;/*对于用户来说这个height都是49*/
    font-size: 14px;
  }

  .tab-bar-item img{
    width: 22px;
    height: 22px;
    margin-top: 3px;
    vertical-align: middle;/*图片本身会跟下面间隔三像素，要用这个去掉*/
    margin-bottom: 2px;
  }
</style>
