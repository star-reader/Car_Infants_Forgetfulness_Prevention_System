<template>
    <div class="body-wrapper">
        <TopStatus />
        <infoDisplay />
        <bigInfo />
    </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue'
import TopStatus from '@/components/TopStatus.vue'
import infoDisplay from '@/components/InfoDispaly.vue'
import bigInfo from '@/components/BigInfo.vue'
import { setMqttServer } from './hooks/useMqttServer';
import useUploadData from './hooks/useUploadData';

onMounted(() => {
    //  setMqttServer()
    //  setInterval(useUploadData, 6000)
})

</script>

<style lang='less' scoped>
.body-wrapper{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right bottom, rgb(35, 37, 58), rgb(47, 47, 75));
}
</style>