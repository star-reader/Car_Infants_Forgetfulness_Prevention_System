import { getMqttServer, setMqttServer } from './useMqttServer'
import useWeather from './useWeather'

export default async () => {
    let client = getMqttServer()
    if (!client) return setMqttServer()
    //时间使用时间戳
    //天气API还在查找，目前有些需要token等授权，所以暂时没弄好，这个以后找到后就可以随时弄
    // 天气对应的城市，先默认是广州市，后续根据接口内容进行调整
    const temperature = await useWeather()
    const data = {
        'time': Date.now(),
        temperature
    }
    client.publish('api', JSON.stringify(data))
}
