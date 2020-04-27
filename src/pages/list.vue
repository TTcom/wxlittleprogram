<template>
   <div class="list">
       this is list
       <div class="innerlist">
             this is innerlist
       </div>
   </div>  
</template>

<script>
export default {
     data(){
        return{
            data:[]
        } 
     },
     async onPullDownRefresh () {
         console.log('pulldown')
        setTimeout(()=>{
            wx.stopPullDownRefresh()
        },3000)
       
    },
    mounted () {
         wx.startPullDownRefresh()
    },
}
</script>

<style lang="scss">

.list{
    font-size: 18px;
    color: red;
    .innerlist{
        font-size: 14px;
        color: black;
    }
}

</style>