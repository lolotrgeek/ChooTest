var g = require('ger')
var esm = new g.MemESM()
var ger = new g.GER(esm);

// create a bucket of events
ger.initialize_namespace('activities')

// get events (likes, dislikes)
.then( function() {
  return ger.events('events.json')
})

