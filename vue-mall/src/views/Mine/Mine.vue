<template>
    <div>
        {{userInfo.username || username}},您好！
        <FooterView />
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import FooterView from "../../components/Footer/Footer"

export default {
    name: 'mine',
    computed: {
        ...mapState({
            userInfo : state => state.users.userInfo
        }),
        username(){
            return window.sessionStorage.getItem("username");
        }
    },
    components : {
        FooterView
    }
}
</script>