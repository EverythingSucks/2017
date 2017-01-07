import Vue from "vue";
import VueRouter from 'vue-router';

require('./Broadcast');
require('./History');
require('./String');
require('./Core');
require('./components/Timeline');
require('./components/Event');

Vue.use(VueRouter);

new Vue({
  el: '#app'
});
