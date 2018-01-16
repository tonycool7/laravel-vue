<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Customer create Component</div>
                    <div class="panel-body">
                        <form class="form form-vertical" method="POST" action="/customers">
                             <input type="hidden" name="_token" :value="csrf" />
                            <div class="form-group">
                                <label class="label-control col-md-2 col-lg-2 col-xs-12 col-sm-12">Name</label>
                                <div class="col-md-9 col-lg-9 col-xs-12 col-sm-12">
                                    <input class="form-control" name="name" type="text">
                                </div>
                            </div><br/><br/>
                            <div class="form-group">
                                <label class="label-control col-md-2 col-lg-2 col-xs-12 col-sm-12">Email</label>
                                <div class="col-md-9 col-lg-9 col-xs-12 col-sm-12">
                                    <input class="form-control col-md-9 col-lg-9 col-xs-12 col-sm-12" name="email" type="email">
                                </div>
                            </div><br/><br/>
                            <div class="form-group">
                                <div class="col-md-2 col-lg-2 col-xs-12 col-sm-12"></div>
                                <div class="col-md-9 col-lg-9 col-xs-12 col-sm-12">
                                    <button class="btn btn-primary">Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data: function(){
        return {
            msg: '',
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
      },
        mounted(){

        }
    }
</script>
