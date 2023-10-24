<template>
    <div class="info-wrapper">
        <div class="divider"></div>
        <div class="title">汽车当前状态</div>
        <div class="info-raw">
            <div class="item">车内温度：<span class="value"
                :class="info.temperature > 32 ? 'red' : ''"
            >{{ info.temperature }}°C</span></div>
            <div class="item">当前状态：<span class="value"
                :class="info.connectionState ? 'green' : 'red'">{{ info.connectionState ? '正常' : '故障' }}</span></div>
            <div class="item">人员状态：<span class="value"
                :class="info.hasPeople ? 'red' : 'green'">{{ info.hasPeople ? '有人' : '无人' }}</span></div>
        </div>
        <div class="info-raw">
            <div class="item">风扇速度：<span class="value">{{ info.fanSpeed }}RPM</span></div>
            <div class="item">电池容量：<span class="value" 
                :class="info.batteryLevel < 20 ? 'red' : 'green'">{{ info.batteryLevel }}%</span></div>
            <div class="item">系统警告：<span class="value"
                :class="info.warningState ? 'red' : 'green'">{{ info.warningState ? '有警告' : '无警告' }}</span></div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import pubsub from 'pubsub-js'
import { ref } from 'vue';

const info = ref<ReceivedData>({
    "temperature": 24,
    "connectionState": true,
    "hasPeople": true,
    "fanSpeed": 2600,
    "batteryLevel": 60,
    "warningState": false
})

pubsub.subscribe('received-data',(_, data: ReceivedData) => {
    info.value = data
})

</script>

<style lang='less' scoped>
.info-wrapper{
    position: relative;
    margin-top: 20px;
    user-select: none;
    left: 8%;
    width: 84%;
    .divider{
        position: relative;
        margin: 0;
        margin-bottom: 15px;
        padding: 0;
        height: 2px;
        width: 100%;
        background-color: rgba(161, 157, 157, 0.6);
    }
    .title{
        color: aliceblue;
        font-size: 28px;
        padding-left: 16px;
        margin-bottom: 30px;
    }
    .info-raw{
        position: relative;
        margin: 10px 0;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        color: rgb(190, 190, 190);
        font-size: 26px;
        .item{
            position: relative;
            padding-left: 14px;
            text-align: center;
        }
        .value{
            color: aliceblue;
            &.green{
                color: rgb(54, 212, 67);
            }
            &.red{
                color: orangered;
            }
        }
    }
}
</style>