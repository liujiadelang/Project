
export default {
    state : {
        isLogin : localStorage.getItem("token") ? true : false,
        userInfo : {}
    },
    mutations : {
        setLoginState(state, boolenVal){
            state.isLogin = boolenVal;
        },
        setUserInfo(state, userInfo){
            state.userInfo = userInfo
        }
    },
    actions : {
        usersLogin({commit}, user){
            let code = null; 
            const { username, passwd} = user;
            if(username == "test" && passwd == "123456aa"){
                //登录成功，设置登录状态和用户信息
                commit('setLoginState', true);
                commit('setUserInfo', {username : "test", token : "successToken"});
                
                //sessionStorage存储一份，防止刷新数据丢失
                window.sessionStorage.setItem("username","test");
                //存储token
                localStorage.setItem("token", "successToken");
                code = 1;
            }else{
                //有错误发生或者登录失败了
                code = 0;
            }
            return code;
        }
    }
}