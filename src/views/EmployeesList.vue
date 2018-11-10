<template>
    <div>
        <div class="card-panel">
            
            <!-- SEARCH AND SORT -->
            <div class="section">
                <div class="row">
                    <div class="col s12 m8"><input type="text" v-model="searchTerm" placeholder="Search by name or email" /></div>
                    <div class="col s12 m4 flex-row dead-center">
                        <strong style="flex-basis:50%;">Sort by:</strong> 
                        <select class="browser-default" v-model="sortBy">
                            <option value="fullName">Name</option>
                            <option value="email">Email</option>
                            <option value="age">Age</option>
                            <option value="dateOfJoining">DOJ</option>
                        </select>
                    </div>
                </div>                    
            </div>
            <!-- END -->

            <!-- EMPLOYEE ACTIONS PANEL -->
            <transition enter-active-class="fadeInUp" leave-active-class="fadeOutDown">
                <div class="card-panel grey lighten-5 z-depth-0 animated faster" v-if="selectedEmployee.id !== -1">
                    <div class="flex-row space-between">
                        <div>
                            <strong>Employee ID {{ selectedEmployee.id }}  &nbsp; </strong> 
                            <button @click="action.deleteEmployee=true" class="btn white btn-small black-text" style="margin:0px 10px;">DELETE</button>
                            <button @click="action.editEmployee=true" class="btn white btn-small black-text">EDIT</button>                                         
                        </div>
                        <div>
                            <button class="btn-flat grey-text darken-2" @click="resetSelectedEmployee()"><i class="material-icons left">clear</i></button>
                        </div>
                    </div>
                </div>
            </transition>
            <!-- END -->

            <!-- LIST OF EMPLOYEES -->
            <section v-if="filteredEmployees.length == 0 "><p>No Matches</p></section>            
            <table v-else class="striped highlight centered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>DOJ</th>
                    </tr>
                </thead>
                <transition-group name="list" tag="tbody">
                    <template v-for="(employee,index) in filteredEmployees" >
                        <tr :key="index" class="cursor-pointer" @click="showEmployeeActions(employee)" :class="{'blue lighten-4': employee.id==selectedEmployee.id}">
                            <td>{{ employee.fullName }}</td>
                            <td>{{ employee.email }}</td>
                            <td>{{ employee.age }}</td>
                            <td>{{ employee.dateOfJoining }} </td>                         
                        </tr>
                    </template>
                </transition-group>
            </table>
            <!-- END -->            
        </div>

        <!-- EDIT AND DELETE ACTIONS -->
        <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
            <edit-employee v-if="action.editEmployee" :employee="selectedEmployee"  @closeEditEmployeeAction="handleEmployeeActionFinish('editEmployee')" />
            <delete-employee v-if="action.deleteEmployee" :employee="selectedEmployee"  @closeDeleteEmployeeAction="handleEmployeeActionFinish('deleteEmployee')"/>
        </transition>
        <!-- END -->
    </div>
</template>


<script>

import DeleteEmployee from '@/components/DeleteEmployee'
import EditEmployee from '@/components/EditEmployee'

export default {
    components: {
        EditEmployee, DeleteEmployee
    },
    data(){
        return {
            searchTerm: '',
            sortBy: 'fullName',
            selectedEmployee: { id: -1 },
            action: {
                deleteEmployee: false, editEmployee: false
            }
        }
    },
    computed: {
        employees(){            
            return this.$store.getters.getEmployeesSorted(this.sortBy)
        },        
        searchTermUppercased(){ 
            return this.searchTerm.toUpperCase()
        },
        filteredEmployees(){
            return this.employees.filter(employee => {                
                return (employee.fullName.toUpperCase().includes(this.searchTermUppercased) || employee.email.toUpperCase().includes(this.searchTermUppercased))
            })
        },
        
    },  
    methods: {
        showEmployeeActions(empId){
            this.selectedEmployee = empId
        },
        handleEmployeeActionFinish(type){
            this.action[type] = false
            this.resetSelectedEmployee()
        },
        resetSelectedEmployee(){
            this.selectedEmployee = { id: -1 }
        }
    }
}
</script>


<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
</style>
