import Vue from 'vue'
import Appx from './App'
import router from './router'

Vue.config.productionTip = false
 
/* eslint-disable no-new */
new Vue({
  el: '#app3',
  router,
  render: function (create) {  

    return create(Appx)}
    
}
)
console.log("%cstart a  new world!~~", "color:#d505e5")