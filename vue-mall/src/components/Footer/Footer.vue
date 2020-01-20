<template>
    <div class="footer">
        <div class="cont">
            <router-link
                class="tab-item"
                v-for = "(item, index) in FooterLinksData"
                :key = "index"
                :to = "item.path"
                active-class="active"
            >
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
    name : "footer",
    data(){
        return {
            
        }
    },
    computed: {
        ...mapState({
            FooterLinksData : state => state.pubData.FooterLinksData
        })
    },
}
</script>

<style scoped>
    .footer{ position: fixed; left: 0; bottom: 0; width: 100%; height: 49px; border-top: 1px solid #ccc;}

    .cont{ display:flex; flex-wrap: nowrap; width:100%; }

    .cont .tab-item{ display:flex; flex-direction:column; flex : 1; text-align:center;}

    .cont .tab-item i { font-size: 18px; padding: 5px 0px;}

    .footer .tab-item.active { color:#1d2121;}
</style>