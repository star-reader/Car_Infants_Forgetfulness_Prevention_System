<template>
    <div class="top-bar">
        <div class="info">⻋辆婴幼⼉防遗忘系统</div>
        <div class="info">系统状态：<span 
            :class="isSystemRunning ? 'normal' : 'off'"
            >{{  isSystemRunning ? '正常' : '已关闭' }}</span></div>
        <div @click="() => isSystemRunning = !isSystemRunning" class="info button-like">
            {{ isSystemRunning ? '关闭' : '开启' }}系统
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const isSystemRunning = ref(true)

</script>

<style lang='less' scoped>
.top-bar{
    position: relative;
    top: 0;
    left: 8%;
    width: 84%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 28px;
    color: aliceblue;
    user-select: none;
    .info{
        padding: 0 6px;
        margin: 0 8px;
        span{
            &.normal{
                color: rgb(54, 212, 67);
            }
            &.off{
                color: orangered
            }
        }
        &.button-like{
        padding: 5px 15px;
        border-radius: 6px;
        cursor: pointer;
        background-color: rgb(55, 65, 122);
        transition-duration: 0.4s;
        &:hover{
            background-color: rgb(44, 53, 100);
            color: lightgray;
        }
        &:first-child{
            padding-left: 0;
            margin-left: 0;
        }
    }
    }
    span{
        color: rgb(54, 212, 67);
    }
    
}
</style>