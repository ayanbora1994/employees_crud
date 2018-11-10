<template>
    <div>
        <div class="row" style="margin:0px -10.5px;">
            <div class="col s12 m6" style="">
                <div class="card-panel">
                    <h5>Please Fill Out New Employee Information</h5>           
                        <form @submit.prevent = "handleSubmit">
                            <div class="section">
                                <label for="name">Name</label>
                                <input id="name" type="text" v-model="employee.fullName" required/>
                                <label for="email">Email</label>
                                <input id="email" type="email" v-model="employee.email" required/>
                                <label for="age">Age</label>
                                <input id="age" type="number" v-model.number="employee.age" required/>
                                <label for="date">Date of joining</label>
                                <input id="date" type="date" v-model="employee.dateOfJoining" required>
                            </div>
                            <div class="section">
                                <button class="btn blue lighter-2 waves-effect waves-light" type="submit"><i class="material-icons left">person_add</i>ADD NEW EMPLOYEE</button>
                            </div>
                        </form>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card-panel">
                    <newly-added-employees />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import NewlyAddedEmployees from '@/components/NewlyAddedEmployees'
import {bus} from '@/providers/bus'

export default {
    components: {
        NewlyAddedEmployees
    },
    data(){
        return {
            employee: {
                id: null, fullName: null, email: null, age: null, dateOfJoining: null, 
            } 
        }
    },
    methods: {
        handleSubmit(){
            // TODO BETTER WAY TO GENERATE ID
            this.employee['id'] = this.$store.getters.numEmployees+1

            // UPDATE CENTRAL STORE WITH NEW EMPLOYEE INFORMATION
            this.$store.dispatch('handleAddEmployee', {...this.employee})

            // EMIT AN EVENT ON ADDITION OF NEW EMPLOYEE
            bus.$emit('newEmployeeAdded', {...this.employee})

            // RESET THE EMPLOYEE FIELDS
            Object.keys(this.employee).forEach(index => this.employee[index] = null)
        }
    }
}
</script>