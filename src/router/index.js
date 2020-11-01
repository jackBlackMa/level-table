import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import SuperInput from '@/components/SuperInput'
import superSelect from '@/components/superSelect'
import TestSelect from '@/components/TestSelect'
import Edit from '@/views/Edit'
import Model from '@/views/8-19/demo1'
import Demo1 from "@/views/10-31/Demo1"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Demo1
    },
    {
      path: '/superSelect',
      name: 'superSelect',
      component: superSelect,
    }
  ]
})
