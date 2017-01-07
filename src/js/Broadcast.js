import Vue from 'vue';

window.Broadcast = new class {
  constructor() {
    this.vue = new Vue();
  }

  send(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
};
