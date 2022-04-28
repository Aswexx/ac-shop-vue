import Vue from 'vue'
import VueRouter from 'vue-router'
import FormStepOneView from './../views/FormStepOneView.vue'
import NotFoundView from './../views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'form-1',
    component: FormStepOneView
  },
  {
    path: '/form2',
    name: 'form-2',
    component: ()=> import('./../views/FormStepTwoView.vue')
  },
  {
    path: '/form3',
    name: 'form-3',
    component: ()=> import('./../views/FormStepThreeView.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundView,
  },
]

const router = new VueRouter({
  routes
})

export default router