<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="fn">翻转世界</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'Hello , Vue'
    }
  },
  methods: {
    fn(){
      this.msg = this.msg.split('').reverse().join('')
    }
  }
}
</script>

<style>

</style>