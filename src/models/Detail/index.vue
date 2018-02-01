<template>
  <div>
    <div class="dt_header">
      <a href="javascript:history.go(-1);"><</a><a>》</a>
    </div>
    <!--<div class="swipe-wrapper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="" :key="1">
          <img class="pic" :src="" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>-->
  </div>

</template>

<script>
import axios from 'axios'
import qs from 'qs'
import {mapGetters,mapActions} from 'vuex'
    export default {
      name: "detail",
      data(){
        return {a:1}
      },
      mounted(){
        axios.post("/v1/product/productView2_new","client_id:180100031051,channel_id:0,webp:1,commodity_id:7463,").then(res=>{
          console.log(res)
        })
      }
    }
</script>

<style>
.dt_header{width: 100%;height: 50px;position: absolute;top: 0;left: 0;}
.dt_header>a{display: block;width: 30px;height: 30px;border-radius:50%;background: rgba(0,0,0,.5);text-align: center;line-height: 30px;
  color: #fff; }
.dt_header>a:nth-child(1){float: left;margin: 10px 0 0 10px;}
.dt_header>a:nth-child(2){float: right;margin: 10px 10px 0 0;}
.swipe-wrapper { height:396px;}
</style>
