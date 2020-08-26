var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://server1.funnycoder.club')

client.on('connect', function () {
  client.subscribe('sensors', function (err) {
  })
})

client.on('message', function(topic, message){
  if (topic == 'sensors') {
    var msg = JSON.parse(message)
    console.log(msg)
    // TODO => check message is valid
    // TODO => insert data to mysql
  }
})
