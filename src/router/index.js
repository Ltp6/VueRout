/*
* 路由器模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import MessageDetail from '../views/MessageDetail'
//声明使用VueRouter
Vue.use(VueRouter)

//向外暴露
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',//  "/"永远代表根路径
          component:News
        },
        {
          path:'message', //简化写法
          component:Message,
          children: [
            {
              path:'/home/message/detail/:id',
              component:MessageDetail
            }
          ]
        },
        //配置默认显示
        {
          path:'/home',
          redirect:'/home/news'
        }
      ]
    },
    //配置默认显示
    {
      path:'/',
      redirect:'/about'
    }
  ]
})
