<template>
    <div>
        <modal @close="$emit('closeEditEmployeeAction')">
            <div slot="header">
                <h4>Edit Employee Details</h4>
            </div>
            <div slot="body" class="section">                                
                <strong>Name:</strong>  <input v-model="employeeData.fullName" required /> <br>
                <strong>Email:</strong> <input v-model="employeeData.email" required /> <br>
                <strong>Age:</strong> <input v-model.number="employeeData.age" required /> <br>
                <strong>DOJ:</strong> <input type="date" v-model="employeeData.dateOfJoining" required />              
            </div>
            <div slot="footer">                
                <button  @click="editEmployee()" type="submit" class="btn blue lighten-2">CONFIRM</button> &nbsp; 
                <button @click="$emit('closeEditEmployeeAction')" class="btn grey lighten-3 black-text">CANCEL</button>
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from './Modal'

export default {    
    components: {
        Modal
    },
    props: ['employee'],
    data(){
        return {
            employeeData: null
        }
    },
    created(){
        this.employeeData = {...this.employee}
    },
    methods: {
        editEmployee() {
            this.$store.dispatch('handleEditEmployee', this.employeeData).then(()=>{
                this.$emit('closeEditEmployeeAction')
            })                
        }
    }
}
</script>

<style>

</style>
