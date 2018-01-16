<template>
    <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-heading">Customer Component</div>
                        <div class="panel-body">
                            <h2 class="small text-success">{{deleteResponse}}</h2>
                            <table class="table table-bordered table-condensed table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr v-for="customer in customers">
                                            <td>{{customer.name}}</td>
                                            <td>{{customer.email}}</td>
                                            <td>
                                                <a href="#" @click="deleteCustomer(customer.id)"> <i class="fa fa-trash"/></a>&nbsp;
                                                <a href="#" @click="editCustomer(customer.id)"> <i class="fa fa-edit"/></a>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        data(){
            return {
                customers: [],
                deleteResponse: ''
            }
        },

        created(){
            this.fetchCustomers();
        },

        methods:{
            fetchCustomers(){
                axios.get('/fetch_customers').then((res) => {
                    this.customers = res.data.customers
                })
                .catch((err) => console.error(err));
            },
            deleteCustomer(id){
                axios.delete('/customers/' + id).then((res) => {
                    this.deleteResponse = res.data.delete;
                    this.fetchCustomers();
                })
                .catch((err) => console.error(err));
            }
        },
        mounted(){

        }
    }
</script>