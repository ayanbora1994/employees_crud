<template>
    <div>
        <h5>Just Added</h5>
        <div class="section">
            <div v-if="newlyAddedEmployees.length>0">
                <table class="stripped responsive-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>DOJ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="employee in newlyAddedEmployees" :key="employee.id">
                            <td>{{ employee.fullName }}</td>
                            <td>{{ employee.email }}</td>
                            <td>{{ employee.age }}</td>
                            <td>{{ employee.dateOfJoining }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
                <p class="grey-text darken-4">
                    <em>Waiting for new employee to be added</em>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {bus} from '@/providers/bus'

export default {
    data(){
        return {
            newlyAddedEmployees: []
        }
    },
    created() {
        bus.$on('newEmployeeAdded', data => {
            this.newlyAddedEmployees.push(data)
        })
    }
}
</script>

<style>

</style>
