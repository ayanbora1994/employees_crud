import Vue from 'vue'
import Router from 'vue-router'
import EmployeesList from './views/EmployeesList'
import AddNewEmployee from './views/AddNewEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'employees',
      component: EmployeesList
    },
    {
      path: '/add-new-employee',
      name: 'add employee',
      component: AddNewEmployee
    }    
  ]
})
