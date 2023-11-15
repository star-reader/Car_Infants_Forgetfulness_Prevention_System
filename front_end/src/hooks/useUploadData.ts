import { getMqttServer, setMqttServer } from './useMqttServer'
import useWeather from './useWeather'

const latitude = 23.8
const longtitude = 113.17

export default async () => {
    let client = getMqttServer()
    if (!client) return setMqttServer()
    //时间使用时间戳
    const temperature = await useWeather(latitude, longtitude)
    const data = {
        'time': Date.now(),
        temperature
    }
    client.publish('api', JSON.stringify(data))
}
