import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Collaborate from '@/components/Collaborate'
import Contact from '@/components/Contact'
import Download from '@/components/Download'
import Intro from '@/components/Intro'
import Price from '@/components/Price'
import Product from '@/components/Product'
import Userinfo from '@/components/Userinfo'
 
Vue.use(Router)

export default new Router({
  routes: [
 
    {component:Index,
     name: '首页',
     path:'/Index',
     alias:"/"
    }
    ,{
      path:'/collaborate',
      component: Collaborate,     
      name: '代理合作',
    },
    {
      path:'/contact',
      component: Contact,
      name: '联系我们',
    },
    {
      path:'/download',
      component: Download,
      name: '产品下载',
    },
    {
      path:'/intro',
      component: Intro,
      name: '公司简介',
    },
    {
      path:'/price',
      component: Price,
      name: '软件价格',
    },
    {
      path:'/product',
      component: Product,
      name: '功能介绍',
    },
    {
      path:'/userinfo',
      component: Userinfo,
      name: '客户留言',
    }

]
})
