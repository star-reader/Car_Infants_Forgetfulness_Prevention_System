<template>
    <div v-if="isShow" class="bg-hover">
        <div class="alert-main">
            <div class="title">系统状态错误</div>
            <div class="info">系统检测到车内情况异常</div>
            <div class="info">请尽快检查车内情况</div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import {ref, onMounted} from 'vue'
import pubsub from 'pubsub-js'
import usePlaySound from '@/hooks/usePlaySound';

const isShow = ref(false)
onMounted(() => {
    pubsub.subscribe('alert-status',(_,status:boolean) => {
        isShow.value = status
        if (status){
            // 触发提示音
            usePlaySound()
        }
    })
})
</script>

<style lang='less' scoped>
.bg-hover{
    // 背景遮盖效果
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    .alert-main{
        position: fixed;
        left: calc(50% - 320px);
        width: 640px;
        top: calc(50% - 110px);
        height: 220px;
        border-radius: 10px;
        background-color: rgb(34, 35, 54);
        .title{
            position: relative;
            font-size: 30px;
            color: orangered;
            font-weight: bold;
            text-align: center;
            margin-top: 30px;
            animation: AlertBooster 0.8s;
            animation-iteration-count: infinite;
        }
        .info{
            position: relative;
            font-size: 24px;
            margin-top: 30px;
            color: white;
            text-align: center;
        }
    }
}
@keyframes AlertBooster {
    0%{
        transform: scale(0.95);
    }
    50%{
        transform: scale(1.2);
    }
    90%{
        transform: scale(1);
    }
}
</style>