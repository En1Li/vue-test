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

let str = 'asdfsdadasgdsasdasdfa'
const arr1 = str.split('')
const obj = arr1.reduce((res , item)=>{
  if(res[item]){
    res[item]++
  }else{
    res[item] = 1
  }
  return res
} , {})
console.log(obj);

let url = 'http://www.baidu.com?name=zhangsan&age=18&sex=nan#'
const jiexi = (url)=>{
  const index1 = url.indexOf('?')
  const index2 = url.indexOf('#')
  const arr = url.substring(index1+1, index2).split('&')
  return arr.reduce((res , item)=>{
    const [key , value] = item.split('=')
      res[key] = value
      return res
  },{})
}
console.log(jiexi(url));