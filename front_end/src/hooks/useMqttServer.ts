import pubsub from 'pubsub-js'
import mqtt from 'mqtt'

let client: mqtt.MqttClient

const setMqttServer =  () => {
  // 连接到客户端的mqtt客户端
  client  = mqtt.connect('mqtt://', {
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    keepalive: 60,
    clean: true
  })

  client.on('connect', function () {
    console.log('已连接到mqtt服务器')
  })

  client.on('message', (_, message) =>  {
      const data = JSON.parse(message.toString())
      pubsub.publish('received-data', data)
  })
}

const getMqttServer = () => {
    return client
}


export {
  setMqttServer,
  getMqttServer
}