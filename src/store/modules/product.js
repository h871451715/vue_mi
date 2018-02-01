import axios from "axios"
export default{
  namespaced:true,
  state:{
    SpData:[]
  },
  getters:{

  },
  mutations:{
    setListData(state,{listData,count,page}){
      state.listCount = count
      state.listPage = page
      if(page===1){//第一页就直接赋值
        state.listData=listData
      }else{//更多数据需要 和之前的数据拼接
        state.listData = state.listData.concat(listData)
      }
    },
    setDetailData(state,{detailData}){
      //console.log(detailData)
      state.detailData=detailData
    }
  },
  actions:{
    getSpData(context,{client_id,channel_id,webp,commodity_id,width}){

      axios.post("/v1/product/productView2_new","client_id:180100031051&channel_id:0&webp:1&commodity_id:7463&width:720").then(res=>{

      })
    },
    getListData(context,{page,callback}){
      axios.get("/loho/search/?e=222&page="+page).then(res=>{

        let result = res.data.result;
        console.log(res.data);
        context.commit("setListData",{
          listData:result.data,
          count:result.count, //是总共的数据条数
          page
        });
        //如果传了回调则触发
        callback&&callback()
      })
    },
    getDetailData({commit},{id}){
      axios("/loho/goods/"+id).then(res=>{
       //console.log(res.data.result)
        commit("setDetailData",{
          detailData:res.data.result
        })
      })
    }

  }
}

