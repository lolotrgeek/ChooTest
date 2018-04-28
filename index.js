// Init
var choo = require('choo')
var html = require('choo/html')
var main = require('./templates/main.js')
var app = choo()

app.use(function (state, emitter) {
 
  // get activities
  state.activities = [
    {name: 'Go Outside', id: 1, y: 100},
    {name: 'Stay Inside', id: 2, y: 100}
  ]

  // add something
  emitter.on('addActivity', function () {
    
    var obj = {name: 'New', id: 3, y: 100}
    state.activities.push(obj)

    emitter.emit('render')
  })
})

// routes
app.route('/', main)

// start app
app.toString('localhost', state)