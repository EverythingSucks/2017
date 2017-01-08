require('es6-promise').polyfill();

import Vue from "vue";
import VueRouter from 'vue-router';

require('./Broadcast');
require('./History');
require('./String');
require('./Core');
require('./components/Timeline');
require('./components/Event');

Vue.use(VueRouter);

if (window.location.protocol == 'http:') {
  let location = window.location;
  window.location = `https://${location.host}/${location.hash}`;
}

new Vue({
  el: '#app'
});
