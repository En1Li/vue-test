import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


let arr = [{a:100}, {a: 20}, {a:-10}]
const sum = arr.reduce((res , item)=>{
  return res += item.a
} , 0)
console.log(sum);