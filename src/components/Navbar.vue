<template>
    <div>
        <nav class="nav-wrapper blue lighten-2">
            <div class="container flex-row space-between">
                <router-link to="/" class="flex-row align-items-center">
                    <i style="display:inline;" class="large material-icons">insert_chart</i> &nbsp; 
                    <strong><em>EMPLOYEES</em></strong>
                </router-link>                      
                <ul class="right">
                    <li :class="{'active': $route.path == '/'}"><router-link to="/">ALL</router-link></li>
                    <li :class="{'active': $route.path == '/add-new-employee'}"><router-link to="/add-new-employee">+ NEW</router-link></li>
                </ul>   
            </div>
        </nav>              
    </div>
</template>