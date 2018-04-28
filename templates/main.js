// import choo's template helper
var html = require('choo/html')

var activity = require('./activity.js')

module.exports = function (state) {   
  // display states
  return html`
    <div class="container">
      ${state.activities.map(activity)}
    </div>
  `
}