// import choo's template helper
var html = require('choo/html')

module.exports = function (state) {  
  // init state
  var type = state.activity.name
  var x = state.activity.id
  var y = state.activity.y
  
  // display state
  return html`
    <div class="activity-${id}">
        <h1>${name}</h1>
    </div>
  `
}