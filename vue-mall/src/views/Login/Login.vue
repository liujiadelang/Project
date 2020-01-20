<template>
    <div class="login">
        <div class="logo"><img src="../../assets/logo.png" alt=""></div>
        <cube-form
            :model="model"
            :schema="schema"
            @submit="handleLogin"
        >
        </cube-form>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
    name : "login",
    data(){
        return {
            model : {
                username : "",
                passwd : ""
            },
            schema : {
                fields : [
                    {
                        type : "input",
                        modelKey : "username",
                        label : "用户名",
                        props : {
                            placeholder : "请输入用户名"
                        },
                        rules : {
                            required : true
                        },
                        trigger : "blur"
                    },
                    {
                        type : "input",
                        modelKey : "passwd",
                        label : "密码",
                        props : {
                            type : "passworld",
                            placeholder : "请输入密码",
                            eye : {
                                open : true
                            }
                        },
                        rules : {
                            required : true
                        },
                        trigger : "blur"
                    },
                    {
                        type : "submit",
                        label : "登录"
                    }
                ]
            }
        }
    },
    methods : {
        handleLogin(ev){
            ev.preventDefault();
            this.$store.dispatch('usersLogin', this.model)
                .then(code => {
                    if(code){
                        //登录成功
                        const path = this.$route.query.redirect || '/home';
                        this.$router.push(path);
                    }else{
                        //有错误发生或者登录失败了
                        const toast = this.$createToast({
                            time : 2000,
                            txt : "登录失败",
                            type : "error"
                        });
                        toast.show();
                    }
                })
        },
    },
}
</script>

<style scoped>
    .logo{ text-align:center; padding: 20px; }
</style>