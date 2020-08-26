var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://server1.funnycoder.club')

client.on('connect', function () {
  var msg = {
    'date' : new Date(),
    'name' : '黄龙山隧道二氧化碳传感A001',
    'type' : 'co2',
    'position' : 'A001',
    'value' : 0.1,
    'unit' : '%',
  }
  client.publish('sensors', JSON.stringify(msg))
})
