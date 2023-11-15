<template>
    <div class="big-info">
        <div class="bg-circle" :class="isOk ? 'normal' : 'warning'">
            <div class="info">系统状态{{ isOk ? '正常' : '错误' }}</div>
        </div>
    </div>
    <Alert />
</template>

<script lang='ts' setup>
import pubsub from 'pubsub-js'
import { ref } from 'vue'
import Alert from './Alert.vue'

const isOk = ref(false)

pubsub.subscribe('received-data',(_, data: ReceivedData) => {
    if (data.temperature > 35 || data.warningState || !data.connectionState){
        isOk.value = false
        pubsub.publish('alert-status', true)
    }else{
        isOk.value = true
        pubsub.publish('alert-status', false)
    }
})

</script>

<style lang='less' scoped>
.big-info{
    position: relative;
    width: 100%;
    margin: 30px 0;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .bg-circle{
        position: relative;
        width: 500px;
        height: $width;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .info{
            position: relative;
            font-size: 38px;
            user-select: none;
            font-weight: bold;
        }
        &.normal{
            background-color: rgba(54, 212, 67, .7);
        }
        &.warning{
            background-color: rgba(255, 68, 0, 0.7);
        }
    }
}
</style>