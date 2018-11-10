<template>
    <div>
        <modal @close="$emit('closeDeleteEmployeeAction')">
            <div slot="header">
                <h4>Delete Employee?</h4>
            </div>
            <div class="section" slot="body">
                <strong>Name:</strong> {{ employee.fullName }} <br>
                <strong>Email:</strong> {{ employee.email }} <br>
                <strong>Age:</strong> {{ employee.age }} <br>
                <strong>DOJ:</strong> {{ employee.dateOfJoining }}              
            </div>
            <div slot="footer">                
                <button @click="deleteEmployee()" class="btn blue lighten-2">CONFIRM</button> &nbsp; 
                <button @click="$emit('closeDeleteEmployeeAction')" class="btn grey lighten-3 black-text">CANCEL</button>
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
    methods: {
        deleteEmployee(){
            this.$store.dispatch('handleDeleteEmployee', this.employee).then(()=>{
                this.$emit('closeDeleteEmployeeAction')
            })
        },        
    }
}
</script>

<style>

</style>
