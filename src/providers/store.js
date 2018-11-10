import Vue from 'vue'
import Vuex from 'vuex'
import fakeDelay from './fakeDelay'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        employees: [
            { id:1, fullName: 'John', dateOfJoining: '2012-12-12', age: 12, email: 'example@example.com' },
            { id:2, fullName: 'Mary', dateOfJoining: '1996-10-11', age: 42, email: 'badzam@example.com' },
            { id:3, fullName: 'Annie', dateOfJoining: '2017-01-05', age: 22, email: 'anni1@example.com' }
        ],
        loading: false
    },
    getters: {
        numEmployees: state => {
            return state.employees.length
        },
        getEmployees: state => {
            return state.employees
        },
        getEmployeesSorted: state => sortBy => {
            return [...state.employees].sort((a,b) => {
                let [nameA, nameB] = [a[sortBy].toString().toUpperCase(), b[sortBy].toString().toUpperCase()]
                if(nameA === nameB) { return 0 }
                return nameA > nameB? 1: -1                                                
            })        
        }
    },
    mutations: {
        ADD_EMPLOYEE: (state, empData) => {
            state.employees.push(empData)
        },
        EDIT_EMPLOYEE: (state, empData) => {
            let index = state.employees.findIndex(emp => emp.id == empData.id)
            state.employees.splice(index, 1, empData)
        },        
        DELETE_EMPLOYEE: (state, empId) => {
            let deleteIndex = state.employees.findIndex(emp => emp.id == empId)
            state.employees.splice(deleteIndex, 1)
        },
        SET_LOADING: (state, value) => {
            state.loading = value
        }
    },
    actions: {        
        handleAddEmployee(state, empData) {
            fakeDelay(state)
            .then(()=>{ state.commit('ADD_EMPLOYEE', empData) }) 
        },
        handleEditEmployee(state, empData) {
            fakeDelay(state)
            .then(()=>{ state.commit('EDIT_EMPLOYEE', empData) }) 
        },        
        handleDeleteEmployee(state, empId) {
            fakeDelay(state)
            .then(()=>{ 
                state.commit('DELETE_EMPLOYEE', empId)
            }) 
        }
    }
})